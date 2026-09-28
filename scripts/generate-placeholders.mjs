/**
 * Generates studio logo + missing app icons / 16:9 screenshot placeholders.
 * Skips files that already exist so real screenshots are never overwritten.
 */
import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="114" fill="#2D4A3E"/>
  <g transform="translate(25 32) scale(7)">
    <circle cx="16" cy="21" r="8.5" fill="#F7F4EF"/>
    <circle cx="44" cy="21" r="8.5" fill="#F7F4EF"/>
    <circle cx="16" cy="21" r="4.2" fill="#C47B4A"/>
    <circle cx="44" cy="21" r="4.2" fill="#C47B4A"/>
    <ellipse cx="30" cy="39" rx="21" ry="18.5" fill="#F7F4EF"/>
    <path d="M17.5 35.5q4 3.6 8 0M34.5 35.5q4 3.6 8 0" fill="none" stroke="#1A2E26" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="30" cy="46" rx="9" ry="7" fill="#D4A574"/>
    <ellipse cx="30" cy="42.6" rx="3.4" ry="2.4" fill="#1A2E26"/>
    <path d="M27 47.2q3 2.2 6 0" fill="none" stroke="#1A2E26" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M52 6h6.5l-6.5 7.5h6.5" fill="none" stroke="#D4A574" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M55 17.5h3.6l-3.6 4h3.6" fill="none" stroke="#D4A574" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>
  </g>
</svg>
`;

const apps = [
  { id: "abode-home", name: "Abode Home", color: "#2D4A3E", shots: 3 },
  { id: "guess-hollywood", name: "Guess Hollywood", color: "#C47B4A", shots: 3 },
  { id: "puzzle-match", name: "Puzzle Match", color: "#C47B4A", shots: 3 },
  { id: "tiny-think", name: "Tiny Think", color: "#5C8A7A", shots: 3 },
  { id: "bao-and-family", name: "Bao and Family", color: "#6EC8FF", shots: 0 },
  { id: "bao-and-friends", name: "Bao and Friends", color: "#5BB8E8", shots: 2 },
  { id: "imposter", name: "Find the Imposter", color: "#6C3CE0", shots: 0 },
  { id: "undercover", name: "Undercover", color: "#7B4FE8", shots: 0 },
  { id: "poko-and-friends", name: "Poko & Friends", color: "#FF7BAC", shots: 0 },
  { id: "tetris", name: "Tetris", color: "#8B6CFF", shots: 0 },
  { id: "bollywood-hollywood", name: "Bollywood Hollywood", color: "#D4A574", shots: 3 },
  { id: "dawa-saathi", name: "Dawa Saathi", color: "#4A8B7A", shots: 3 },
  { id: "guess-bollywood", name: "Guess Bollywood", color: "#C47B4A", shots: 0 },
  { id: "robotics-club-mmmut", name: "Robotics Club", color: "#5C6B66", shots: 0 },
];

function iconSvg(name, color) {
  const lines = name.split(" ");
  const t1 = lines[0] ?? name;
  const t2 = lines.slice(1).join(" ");
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="114" fill="${color}"/>
  <text x="256" y="${t2 ? 240 : 270}" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="700" fill="#F7F4EF">${escapeXml(t1)}</text>
  ${t2 ? `<text x="256" y="300" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="40" font-weight="600" fill="#F7F4EF">${escapeXml(t2)}</text>` : ""}
</svg>`;
}

function shotSvg(name, n, color) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#F7F4EF"/>
  <rect x="80" y="80" width="1440" height="740" rx="32" fill="${color}"/>
  <text x="800" y="430" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="56" font-weight="700" fill="#F7F4EF">${escapeXml(name)}</text>
  <text x="800" y="500" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="32" fill="#F7F4EF">Screenshot ${n} placeholder</text>
</svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function writePng(absPath, svg, width, height) {
  mkdirSync(dirname(absPath), { recursive: true });
  if (existsSync(absPath)) return false;
  const buf = await sharp(Buffer.from(svg)).resize(width, height).png().toBuffer();
  writeFileSync(absPath, buf);
  return true;
}

async function main() {
  mkdirSync(join(publicDir, "studio"), { recursive: true });
  const logoPath = join(publicDir, "studio", "logo.png");
  if (await writePng(logoPath, LOGO_SVG, 512, 512)) {
    console.log("wrote", logoPath);
  }

  for (const app of apps) {
    const dir = join(publicDir, "apps", app.id);
    mkdirSync(dir, { recursive: true });
    const iconPath = join(dir, "icon.png");
    if (await writePng(iconPath, iconSvg(app.name, app.color), 512, 512)) {
      console.log("wrote", iconPath);
    }
    for (let i = 1; i <= app.shots; i++) {
      const shotPath = join(dir, `screenshot-${i}.png`);
      if (await writePng(shotPath, shotSvg(app.name, i, app.color), 1600, 900)) {
        console.log("wrote", shotPath);
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: isDev,
    minimumCacheTTL: isDev ? 0 : 86400,
  },
  async headers() {
    if (!isDev) return [];
    return [
      {
        source: "/apps/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;

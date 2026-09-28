export type AppStatus = "live" | "coming_soon" | "in_review" | "draft" | "archived";

export type AppCategory =
  | "Productivity"
  | "Trivia"
  | "Puzzle"
  | "Education"
  | "Health"
  | "Party"
  | "Other";

export interface StudioApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  category: AppCategory;
  packageName: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  status: AppStatus;
  featured: boolean;
  icon: string;
  screenshots: string[];
  websiteUrl?: string;
  privacyPolicyUrl?: string;
  accentColor?: string;
}

export const STATUS_LABEL: Record<AppStatus, string> = {
  live: "Live",
  coming_soon: "Coming soon",
  in_review: "Coming soon",
  draft: "In development",
  archived: "Archived",
};

export const apps: StudioApp[] = [
  {
    id: "abode-home",
    name: "Abode Home",
    tagline: "Design rooms and apartments in 2D, then explore them in 3D.",
    description:
      "Abode Home helps you plan and visualize interior spaces before you build or renovate. Draw a professional blueprint, drop in furniture and finishes, then step into a real-time 3D preview — and export a PDF you can share.",
    features: [
      "Blueprint floor plans with accurate measurements",
      "Live sketch annotations on the plan",
      "Real-time 3D preview with orbit and isometric cameras",
      "Professional PDF export for clients and walkthroughs",
    ],
    category: "Productivity",
    packageName: "com.abodehome.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abodehome.app",
    status: "live",
    featured: true,
    icon: "/apps/abode-home/icon.png",
    screenshots: [
      "/apps/abode-home/screenshot-1.png",
      "/apps/abode-home/screenshot-2.png",
      "/apps/abode-home/screenshot-3.png",
    ],
    websiteUrl: "https://abodehome.app",
    privacyPolicyUrl: "/privacy/abode-home",
    accentColor: "#2D4A3E",
  },
  {
    id: "guess-hollywood",
    name: "Guess Hollywood",
    tagline: "Guess the Hollywood movie from the clues.",
    description:
      "Think you know Hollywood? Use the clues on screen to name the film, keep your streak going, and see how many titles you can identify. Extra lives let you recover from a miss and keep playing.",
    features: [
      "Guess movies from on-screen clues",
      "Test memory of Hollywood titles",
      "Extra lives to continue a streak",
      "Simple, casual rounds built for movie fans",
    ],
    category: "Trivia",
    packageName: "com.lazy_bear_club.guess_hollywood",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lazy_bear_club.guess_hollywood",
    status: "live",
    featured: true,
    icon: "/apps/guess-hollywood/icon.png",
    screenshots: [
      "/apps/guess-hollywood/screenshot-1.jpg",
      "/apps/guess-hollywood/screenshot-2.jpg",
      "/apps/guess-hollywood/screenshot-3.jpg",
    ],
    privacyPolicyUrl: "/privacy/guess-hollywood",
    accentColor: "#C47B4A",
  },
  {
    id: "puzzle-match",
    name: "Puzzle Match",
    tagline: "Match, slide, and solve before time runs out.",
    description:
      "Puzzle Match is a relaxing timed puzzle: rearrange the pieces, complete the picture, and race the clock through increasingly challenging stages. Use a hint when you are stuck — or earn extra time to finish the round.",
    features: [
      "Solve image puzzles stage by stage",
      "Beat the clock on every round",
      "Hints when a piece will not click",
      "Build a high score as stages get harder",
    ],
    category: "Puzzle",
    packageName: "com.lazy_bear_club.puzzle_match",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lazy_bear_club.puzzle_match",
    status: "live",
    featured: true,
    icon: "/apps/puzzle-match/icon.png",
    screenshots: [
      "/apps/puzzle-match/screenshot-home-dark.jpg",
      "/apps/puzzle-match/screenshot-home-light.jpg",
      "/apps/puzzle-match/screenshot-play.jpg",
      "/apps/puzzle-match/screenshot-level-complete.jpg",
      "/apps/puzzle-match/screenshot-stage-complete.jpg",
      "/apps/puzzle-match/screenshot-1.jpg",
      "/apps/puzzle-match/screenshot-2.jpg",
      "/apps/puzzle-match/screenshot-3.jpg",
    ],
    privacyPolicyUrl: "/privacy/puzzle-match",
    accentColor: "#C47B4A",
  },
  {
    id: "tiny-think",
    name: "Tiny Think",
    tagline: "Fun educational games for toddlers and preschoolers.",
    description:
      "Tiny Think is an early-learning app for children aged 2–6. Kids play through shape matching, colors, numbers, memory, animals, and puzzles in a child-friendly interface designed as a safe learning environment.",
    features: [
      "Shape matching and color recognition",
      "Number learning and memory games",
      "Animal learning and simple puzzles",
      "Child-friendly interface for ages 2–6",
    ],
    category: "Education",
    packageName: "com.tinythink.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tinythink.app",
    status: "live",
    featured: true,
    icon: "/apps/tiny-think/icon.png",
    screenshots: [
      "/apps/tiny-think/screenshot-welcome.png",
      "/apps/tiny-think/screenshot-fishing.png",
      "/apps/tiny-think/screenshot-sounds.png",
      "/apps/tiny-think/screenshot-space.png",
      "/apps/tiny-think/screenshot-1.png",
      "/apps/tiny-think/screenshot-2.png",
      "/apps/tiny-think/screenshot-3.png",
    ],
    privacyPolicyUrl: "/privacy/tiny-think",
    accentColor: "#5C8A7A",
  },
  {
    id: "bao-and-family",
    name: "Bao and Family",
    tagline: "A gentle caretaking world around Bao, a young panda at home.",
    description:
      "Bao and Family is a children’s caretaking game in development. Look after Bao through Learn, Feed, Drink Water, Activities, and Chores in a small home world. Warm, readable play — not a classroom replacement.",
    features: [
      "Home hub with Learn, Feed, Drink Water, Activities, and Chores",
      "Mealtime and bottle play in the kitchen",
      "Everyday routines like brushing teeth",
      "Simple level and star progress",
    ],
    category: "Education",
    packageName: "com.lazy_bear_club.bao_and_family",
    status: "draft",
    featured: false,
    icon: "/apps/bao-and-family/icon.png",
    screenshots: [
      "/apps/bao-and-family/screenshot-home.jpg",
      "/apps/bao-and-family/screenshot-chores.jpg",
      "/apps/bao-and-family/screenshot-drink.jpg",
      "/apps/bao-and-family/screenshot-feed.jpg",
    ],
    privacyPolicyUrl: "/privacy/bao-and-family",
    accentColor: "#6EC8FF",
  },
  {
    id: "bao-and-friends",
    name: "Bao and Friends",
    tagline: "Learn, play, and grow with Bao and friends.",
    description:
      "Bao and Friends is a children’s play world around Bao, a young panda, and the friends who share the garden, cottage, and everyday adventures. Warm, readable play for little ones — not a classroom replacement.",
    features: [
      "Meet Bao in a sunny home-and-garden world",
      "Play everyday activities with Bao’s friends",
      "Learn through gentle, child-friendly scenes",
      "Grow together — short sessions built for young children",
    ],
    category: "Education",
    packageName: "com.lazy_bear_club.bao_and_friends",
    status: "draft",
    featured: false,
    icon: "/apps/bao-and-friends/icon.png",
    screenshots: [
      "/apps/bao-and-friends/screenshot-hero.jpg",
      "/apps/bao-and-friends/screenshot-1.png",
      "/apps/bao-and-friends/screenshot-2.png",
    ],
    privacyPolicyUrl: "/privacy/bao-and-friends",
    accentColor: "#5BB8E8",
  },
  {
    id: "imposter",
    name: "Find the Imposter",
    tagline: "Everyone knows the word. One of you doesn’t.",
    description:
      "Find the Imposter is a pass-the-phone party game for 3–20 players. Everyone gets the same secret word — except the imposter. Reveal your card privately, put the phone down, then give clues and vote out loud to find who is bluffing.",
    features: [
      "Pass-the-phone play for 3–20 players on one device",
      "Hold-to-reveal secret cards that hide when the app is backgrounded",
      "Easy, Medium, and Difficult word packs with optional imposter hints",
      "Works offline with a bundled 600-word pack",
    ],
    category: "Party",
    packageName: "com.the_lazy_bear_club.imposter",
    status: "draft",
    featured: false,
    icon: "/apps/imposter/icon.png",
    screenshots: [
      "/apps/imposter/screenshot-home.jpg",
      "/apps/imposter/screenshot-setup.jpg",
      "/apps/imposter/screenshot-pass-phone.jpg",
      "/apps/imposter/screenshot-reveal.jpg",
      "/apps/imposter/screenshot-all-revealed.jpg",
    ],
    privacyPolicyUrl: "/privacy/imposter",
    accentColor: "#6C3CE0",
  },
  {
    id: "bollywood-hollywood",
    name: "Bollywood Hollywood",
    tagline: "Guess the film — Bollywood and Hollywood, one game.",
    description:
      "A timed movie-guessing game that mixes Bollywood and Hollywood titles. Fill in the name, use hints when you stall, and keep the lives row going.",
    features: [
      "Bollywood and Hollywood titles in one quiz",
      "Timed rounds with letter blanks",
      "Hints for cast, plot, and year when you are stuck",
      "Extra life after an ad on game over",
    ],
    category: "Trivia",
    packageName: "com.lazy_bear_club.bollywood_hollywood",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lazy_bear_club.bollywood_hollywood",
    status: "live",
    featured: false,
    icon: "/apps/bollywood-hollywood/icon.png",
    screenshots: [
      "/apps/bollywood-hollywood/screenshot-win.jpg",
      "/apps/bollywood-hollywood/screenshot-hint.jpg",
      "/apps/bollywood-hollywood/screenshot-game-over.jpg",
      "/apps/bollywood-hollywood/screenshot-1.jpg",
      "/apps/bollywood-hollywood/screenshot-2.jpg",
      "/apps/bollywood-hollywood/screenshot-3.jpg",
    ],
    privacyPolicyUrl: "/privacy/bollywood-hollywood",
    accentColor: "#D4A574",
  },
  {
    id: "dawa-saathi",
    name: "Dawa Saathi",
    tagline: "On-device medicine reminders — a companion, not a clinic.",
    description:
      "Dawa Saathi is a medicine companion in development: today’s doses, a simple schedule, and a progress view. Reminders stay on the device. It does not diagnose, treat, or replace a clinician.",
    features: [
      "Today’s dose list with taken or missed states",
      "Simple schedule and reminder times",
      "Reminders saved on the device",
    ],
    category: "Health",
    packageName: "com.lazy_bear_club.dawa_saathi",
    status: "draft",
    featured: false,
    icon: "/apps/dawa-saathi/icon.png",
    screenshots: [
      "/apps/dawa-saathi/screenshot-1.jpg",
      "/apps/dawa-saathi/screenshot-2.jpg",
      "/apps/dawa-saathi/screenshot-3.png",
    ],
    privacyPolicyUrl: "/privacy/dawa-saathi",
    accentColor: "#4A8B7A",
  },
  {
    id: "guess-bollywood",
    name: "Guess Bollywood",
    tagline: "Guess the Bollywood movie from the clues.",
    description:
      "A Bollywood title-guessing game for people who grew up with Indian cinema — or who simply want to test how many films they still remember.",
    features: [
      "Guess Bollywood titles from clues",
      "Casual rounds built around film memory",
      "Same guessing-game DNA as Guess Hollywood",
    ],
    category: "Trivia",
    packageName: "com.lazy_bear_club.guess_bollywood",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lazy_bear_club.guess_bollywood",
    status: "live",
    featured: false,
    icon: "/apps/guess-bollywood/icon.png",
    screenshots: [
      "/apps/guess-bollywood/screenshot-1.png",
      "/apps/guess-bollywood/screenshot-2.png",
    ],
    privacyPolicyUrl: "/privacy/guess-bollywood",
    accentColor: "#C47B4A",
  },
  {
    id: "robotics-club-mmmut",
    name: "Robotics Club MMMUT",
    tagline: "A past community project for the university robotics club.",
    description:
      "An earlier community app associated with the Robotics Club at Madan Mohan Malaviya University of Technology. The listing was removed from Google Play and is kept here as a past project only.",
    features: [],
    category: "Other",
    packageName: "com.roboticsclub.rcapp",
    status: "archived",
    featured: false,
    icon: "/apps/robotics-club-mmmut/icon.png",
    screenshots: [],
    privacyPolicyUrl: "/privacy/robotics-club-mmmut",
    accentColor: "#5C6B66",
  },
];

export function getAppBySlug(slug: string): StudioApp | undefined {
  return apps.find((app) => app.id === slug);
}

export const catalogApps = apps.filter((app) => app.status !== "archived");
export const featuredLiveApps = apps.filter(
  (app) => app.featured && app.status === "live",
);
export const liveApps = apps.filter((app) => app.status === "live");
export const archivedApps = apps.filter((app) => app.status === "archived");

export function isPlayReady(app: StudioApp): boolean {
  return app.status === "live" && Boolean(app.playStoreUrl);
}

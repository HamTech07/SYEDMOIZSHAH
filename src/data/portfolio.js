const driveFile = (id) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`;
const driveDownload = (id) => `https://drive.google.com/uc?export=download&id=${id}`;
const driveThumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

const games = [
  { id: "bankshot", title: "Bankshot", imageId: "1_E8uFBjMvjuE7kQ2UF_dgRhRW-P2alGK", apkId: "1DYO_8eaqbdi79ruHD4oZCj8KZqNbhEdL", category: "Sports", accent: "cyan", description: "An Android game build from Moiz’s portfolio. Open the project or download the APK to play." },
  { id: "cargo-color-sort", title: "Cargo Color Sort", imageId: "1ysbF6e_iurJh9vTomyIsC3V1Safe_Y70", apkId: "1n3mKJaOwPeIvNvojjihs2NtXOl4I-L3b", category: "Puzzle", accent: "orange", description: "A color-sorting puzzle game build for Android. Open the project or download the APK to play." },
  { id: "clash-of-runners", title: "Clash Of Runners", imageId: "1GklrtKpbZXHkad4E08UffPZahIL2gaG5", apkId: "1nitnw0QHXOLkXFZdM7a4ME1pUEloXYTz", category: "Runner", accent: "violet", description: "A runner-style Android game build. Open the project or download the APK to play." },
  { id: "frame-snooker", title: "Frame Snooker", imageId: "1uG8pFQc3Crc1xTh5Uw-RteW6VNDe2N1T", apkId: "18x3fWtI_LGet6wj6nvIajF5_2KudrNjZ", category: "Sports", accent: "pink", description: "A snooker-themed Android game build. Open the project or download the APK to play." },
  { id: "lowlight", title: "Lowlight", imageId: "1zb-vG-wGlg1NaAHD92qdSYLYZFfs7Uwk", apkId: "1razMvU5DZ6bn4KWICYVPmfWfIdC4MXVs", category: "Adventure", accent: "cyan", description: "An Android game build from Moiz’s portfolio. Open the project or download the APK to play." },
  { id: "rewind-breakout", title: "Rewind Breakout", imageId: "1kYtOmGyliLH3M4-c0lJCnFO9en9h_WE4", apkId: "1WMnNP5YgDTMbKLnzESgtexKBUeioF0E9", category: "Arcade", accent: "orange", description: "A breakout-style arcade game build for Android. Open the project or download the APK to play." },
  { id: "street-bite-tycoon", title: "Street Bite Tycoon", imageId: "1vHhtaf6INkFeao0KlWzWgpvAyJUkX2Xk", apkId: "1hy0QiHhiSoIuPKgAYtk744a-WGjnZwdH", category: "Simulation", accent: "violet", description: "A street-food tycoon game build for Android. Open the project or download the APK to play." },
  { id: "tether", title: "Tether", imageId: "1EcOjz6CsmtAruSmwBq3Vv_X1b8AxpVjg", apkId: "1HGh-ZhMPG31aNMNUGivRjE9x2OGadtaW", category: "Arcade", accent: "pink", description: "An Android game build from Moiz’s portfolio. Open the project or download the APK to play." },
  { id: "truffy-kitchen", title: "Truffy Kitchen", imageId: "17mtQgpWcuDs5nKKdP99xAvR2s8-2_wCV", apkId: "1af9xCbFjqBD-jA_BjmYa1bO3VAE4gzge", category: "Casual", accent: "cyan", description: "A kitchen-themed casual game build for Android. Open the project or download the APK to play." },
];

export const projects = games.map((game, index) => ({
  id: game.id,
  number: String(index + 1).padStart(2, "0"),
  title: game.title,
  category: game.category,
  description: game.description,
  url: driveFile(game.apkId),
  downloadUrl: driveDownload(game.apkId),
  downloadName: `${game.id}.apk`,
  domain: "ANDROID GAME",
  image: driveThumb(game.imageId),
  tags: ["Android", "Game Build", "Unity"],
  accent: game.accent,
  role: "Unity game development",
  challenge: `Package ${game.title} as a playable Android game build.`,
  solution: "A downloadable APK is available from the linked Google Drive file.",
  highlights: ["Android build", "APK download", "Unity game portfolio"],
  capabilities: ["unity", "gameplay", "production"],
}));

export const capabilities = [
  {
    key: "unity",
    title: "Unity Game Development",
    eyebrow: "01 / Game engine",
    description: "Playable worlds, responsive controls and game systems built in Unity.",
    stack: ["Unity", "C#", "Gameplay systems"],
    accent: "violet",
    image: "/images/services/games.webp",
  },
  {
    key: "blender",
    title: "3D Modeling & Animation",
    eyebrow: "02 / 3D art",
    description: "Game-ready models and animation workflows shaped around the world they belong to.",
    stack: ["Blender", "Modeling", "Animation"],
    accent: "orange",
    image: "/images/services/design.webp",
  },
  {
    key: "gameplay",
    title: "Gameplay Systems",
    eyebrow: "03 / Interaction",
    description: "C# mechanics, game logic and interaction details that make play feel clear and responsive.",
    stack: ["C#", "Game logic", "Prototyping"],
    accent: "cyan",
    image: "/images/services/mobile.webp",
  },
  {
    key: "production",
    title: "Android Game Builds",
    eyebrow: "04 / Delivery",
    description: "Playable Android builds prepared so players can install and try the finished work.",
    stack: ["Unity", "Android", "APK"],
    accent: "pink",
    image: "/images/services/automation.webp",
  },
];

export const techStack = [
  { name: "Unity", logo: "unity", category: "Game engine" },
  { name: "Blender", logo: "blender", logoUrl: "https://cdn.simpleicons.org/blender/EA7600", category: "3D modeling & animation" },
  { name: "C#", logo: "csharp", category: "Gameplay programming" },
  { name: "Visual Studio", logo: "visualstudio", category: "C# development" },
];

import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Abyss 3D Viewer",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav: [{ text: "Getting Started", link: "/guide/getting-started" }],
    sidebar: [
      {
        text: "Items",
        items: [
          { text: "What is Abyss 3D Viewer?", link: "/guide/about" },
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
    ],
  },
});

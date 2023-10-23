import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Abyss 3D Viewer",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav: [{ text: "Getting Started", link: "/guide/getting-started" }],
    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "What is Abyss 3D Viewer?", link: "/guide/about" },
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
      {
        text: "Documentation",
        collapsed: false,
        items: [
          { text: "Types", link: "/guide/types" },
          { text: "Utils", link: "/guide/utils" },
          {
            text: "Components",
            collapsed: true,
            items: [
              { text: "Billboard", link: "/guide/components/billboard" },
              { text: "Marker", link: "/guide/components/marker" },
              { text: "SVG Marker", link: "/guide/components/svg-marker" },
            ],
          },
        ],
      },
      {
        text: "Team",
        link: "/team",
      },
    ],
    footer: {
      copyright:
        "© 2023 Abyss Solutions - all trademarks are the property of their respective owners",
    },
  },
});

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
          { text: "Props", link: "/guide/props" },
          { text: "Utils", link: "/guide/utils" },
          {
            text: "Components",
            collapsed: true,
            items: [
              { text: "Billboard", link: "/guide/components/billboard" },
              { text: "Marker", link: "/guide/components/marker" },
              { text: "Model", link: "/guide/components/model" },
              { text: "SVG Marker", link: "/guide/components/svg-marker" },
              { text: "Wireframe", link: "/guide/components/wireframe" },
            ],
          },
          {
            text: "Core",
            collapsed: true,
            items: [
              {
                text: "PointsAttributeBuffer",
                link: "/guide/core/PointsAttributeBuffer",
              },
              {
                text: "BinPointsLoader",
                link: "/guide/core/BinPointsLoader",
              },
              {
                text: "OctreePointCloudMasterImpl",
                link: "/guide/core/OctreePointCloudMasterImpl",
              },
            ],
          },
          {
            text: "Data",
            collapsed: true,
            items: [
              { text: "3D File Formats", link: "/guide/data/3d-file-formats" },
              { text: "Octree Parsing", link: "/guide/data/octree-parsing" },
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
    lastUpdated: {
      text: "Last Updated",
    },
  },
});

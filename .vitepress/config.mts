import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Abyss 3D Viewer",
  description: "Vite & Vue powered static site generator.",
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],

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
          {
            text: "Types",
            collapsed: true,
            items: [
              { text: "Utils", link: "/guide/types/utils-types" },
              { text: "Props", link: "/guide/types/props-types" },
            ],
          },
          {
            text: "Props",
            link: "/guide/props",
          },
          { text: "Utils", link: "/guide/utils" },
          { text: "Hooks", link: "/guide/hooks" },
          { text: "Helpers", link: "/guide/helpers" },
          {
            text: "Components",
            collapsed: true,
            items: [
              { text: "Billboard", link: "/guide/components/billboard" },
              { text: "Marker", link: "/guide/components/marker" },
              { text: "SVG Marker", link: "/guide/components/svg-marker" },
              { text: "Model", link: "/guide/components/model" },
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
              { text: "Bin file format", link: "/guide/data/bin-file-format" },
              {
                text: "Octree heirarchy",
                link: "/guide/data/octree-heirarchy",
              },
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

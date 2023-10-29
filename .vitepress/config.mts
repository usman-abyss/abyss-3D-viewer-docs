import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "3D Viewer",
  description: "Documentation for the Abyss 3D Viewer",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    logo: {
      dark: "/logo_dark.png",
      light: "/logo_light.png",
      alt: "Abyss logo",
    },
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
            text: "Props",
            link: "/guide/props",
          },
          {
            text: "Types",
            collapsed: true,
            items: [
              { text: "Utils", link: "/guide/types/utils-types" },
              { text: "Props", link: "/guide/types/props-types" },
            ],
          },
          {
            text: "Helpers",
            collapsed: true,
            items: [{ text: "ColorMap", link: "/guide/helpers/colormap" }],
          },
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
            text: "Camera",
            collapsed: true,
            items: [
              {
                text: "Look Around Controls",
                link: "/guide/camera/look-around-controls",
              },
              {
                text: "Navigation Controls",
                link: "/guide/camera/navigation-controls",
              },
              {
                text: "Camera Mover",
                link: "/guide/camera/camera-mover",
              },
            ],
          },
          {
            text: "Data",
            collapsed: true,
            items: [
              { text: "Data Pipeline", link: "/guide/data/data-pipeline" },
              {
                text: "Octree heirarchy",
                link: "/guide/data/octree-heirarchy",
              },
            ],
          },
          { text: "Utils", link: "/guide/utils" },
          { text: "Hooks", link: "/guide/hooks" },
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

# Getting Started

## Add Abyss 3D Viewer to your project

### Installation

- Install Node.js v16.17.0 (nvm recommended)
- Install Yarn
- ```bash
  yarn add @abyss/3d-viewer react react-dom \
  three @types/react @types/react @types/react-dom @types/three
  ```

### Component Usage

Import and use the AbyssViewer component in your React components

```tsx
import { AbyssViewer } from "@abyss/3d-viewer";

<AbyssViewer {...props} />;
```

### Props Setup

Abyss 3D Viewer provides a lot of props to customize the viewer. You can learn more about the props in the [Props](/guide/props.md) section.

## Setup for development

```bash
git clone git@github.com:abyss-solutions/abyss-3d-viewer.git
cd abyss-3d-viewer
nvm install # Installing Node.js v16.17.0
npm install -g yarn # Global installation of Yarn
yarn # Installing dependencies
yarn start # Starting the development server
```

Please note that the project requires a specific version of Node (v16.17.0) to run properly locally. We recommend using nvm for managing Node versions.

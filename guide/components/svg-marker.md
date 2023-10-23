# SvgMarker Component

## Description

This component is used to render an SVG marker in a Three.js scene. It is designed to display SVG content with specified properties such as scale, height, and position. The marker can be made clickable to enable interaction with it in the 3D environment.

It makes use of a Three.js sprite to display the SVG content. The sprite is always facing the camera, which makes it appear as a 2D label in the 3D scene. More on sprites can be found [here](https://threejs.org/docs/#api/en/objects/Sprite).

It uses the `Billboard` component to display the SVG content. The `Billboard` component is a customizable 2D label that can be placed in a 3D scene. It is designed to display text with specified properties such as color, background color, font size, and position. The label can be made clickable to enable interaction with it in the 3D environment.

## Types

- **MarkerLineStyleProps**: An interface for defining the style properties of marker lines.
- **MarkerSphereStyleProps**: An interface for specifying the style properties of marker spheres.
- **SvgMarkerProps**: The main interface that encapsulates the props used by the `SvgMarker` component.

## Helper Functions

- `defaultMarkerHeight`: A constant representing the default height of the marker.
- `defaultScale`: A constant representing the default scale of the marker.
- `defaultMarkerLineStyle`: A constant object representing the default style properties for marker lines.
- `defaultMarkerSphereStyle`: A constant object representing the default style properties for marker spheres.
- `scaleAdjustmentFactor`: A constant factor used to adjust the scale of markers.

## Props

The `SvgMarker` component accepts a variety of props, allowing you to customize the appearance and behavior of the marker. These props include:

| Prop                     | Type                           | Description                                                                  |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------- |
| position                 | THREE.Vector3                  | The 3D position where the marker should be placed.                           |
| rotation                 | Parameters<THREE.Euler['set']> | The rotation of the marker (optional).                                       |
| onMarkerClick            | () => void                     | A callback function to be executed when the marker is clicked (optional).    |
| svgComp                  | string                         | The SVG content to be displayed as the marker.                               |
| scale                    | number                         | The scale of the marker (default: 1).                                        |
| markerHeight             | number                         | The height of the marker (default: 2.5).                                     |
| markerLineStyle          | MarkerLineStyleProps           | Style properties for marker lines (default: see defaultMarkerLineStyle).     |
| markerSphereStyle        | MarkerSphereStyleProps         | Style properties for marker spheres (default: see defaultMarkerSphereStyle). |
| hoveredComp              | string                         | The SVG content to be displayed when the marker is hovered over (optional).  |
| hoveredScale             | number                         | The scale of the marker when hovered over (default: 1).                      |
| hoveredMarkerSphereStyle | MarkerSphereStyleProps         | Style properties for marker spheres when hovered (optional).                 |

## Usage

To use the `SvgMarker` component in your Three.js application, follow these steps:

1. Import the component and any necessary dependencies:

```javascript
import { SvgMarker } from "@/path/to/SvgMarker";
```

2. Utilize the component within your JSX code, specifying the required and optional props to create and customize the marker:

```jsx
<SvgMarker
  position={[x, y, z]}
  svgComp={svgContent}
  scale={customScale}
  markerHeight={customHeight}
  markerLineStyle={customLineStyle}
  markerSphereStyle={customSphereStyle}
  hoveredComp={hoveredSvgContent}
  hoveredScale={hoveredScale}
  hoveredMarkerSphereStyle={hoveredSphereStyle}
  onMarkerClick={handleMarkerClick} // Optional
/>
```

This will render the `SvgMarker` in your 3D scene with the provided SVG content and customizable properties. You can adjust the appearance and behavior of the marker by modifying the props as needed. The component also supports click interactions with the `onMarkerClick` callback function.

Replace `@/path/to/SvgMarker` with the actual import path to the `SvgMarker` component in your project.

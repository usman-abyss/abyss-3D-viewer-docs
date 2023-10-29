# Polygon

## Description

A React component for drawing polygons in 3D space. It is a lightweight and efficient component that can be used to draw a variety of shapes, such as rectangles, squares, and triangles.

## Props

- **borderPoints:** An array of points that define the polygon's outline. The points must be specified in the order in which they should be connected.
- **styles:** An object with two properties, `normal` and `highlighted`, which define the polygon's appearance when it is not and is highlighted, respectively. Each property should be an object with the following CSS properties:
  - `color`: The polygon's color.
  - `opacity`: The polygon's opacity.
  - `size`: The polygon's size.
  - `emissiveIntensity`: The polygon's emissive intensity.
- **name:** The polygon's name. This is used to display a label for the polygon when it is highlighted.
- **isVisible:** A boolean value indicating whether the polygon is visible.
- **onClicked:** A callback function that is called when the polygon is clicked.

## Usage

To use the `Polygon` component, simply import it into your React project and then add it to your component template. You can pass the `borderPoints`, `styles`, `name`, `isVisible`, and `onClicked` props to the component as needed.

Here is an example of how to use the `Polygon` component to draw a rectangle with a red highlight:

```jsx
import Polygon from "./Polygon";

const borderPoints = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 1, z: 0 },
  { x: 0, y: 1, z: 0 },
];

const styles = {
  normal: {
    color: new THREE.Color(0.28, 0.75, 0.55),
    opacity: 0.4,
    size: 0.3,
    emissiveIntensity: 0.1,
  },
  highlighted: {
    color: new THREE.Color(1, 0.05, 0.05),
    opacity: 0.6,
    size: 0.3,
    emissiveIntensity: 0.3,
  },
};
const onClicked = () => {
  console.log("Clicked!");
};

<Polygon
  borderPoints={borderPoints}
  styles={styles}
  name="My Rectangle"
  isVisible={true}
  onClicked={onClicked}
/>;
```

## API

The `Polygon` component exposes the following API:

- `mesh`: A reference to the polygon's mesh.
- `isHighlighted`: A boolean value indicating whether the polygon is highlighted.

## Styling

The `Polygon` component can be styled using the following CSS properties:

- `color`: The polygon's color.
- `opacity`: The polygon's opacity.
- `size`: The polygon's size.
- `emissiveIntensity`: The polygon's emissive intensity.

## Events

The `Polygon` component emits the following event:

- `onClick`: Emitted when the polygon is clicked.

## Performance

The `Polygon` component is optimized for performance. It uses a `bufferGeometry` to draw the polygon, and it caches the polygon's style and `displayName` prop to avoid unnecessary re-renders.

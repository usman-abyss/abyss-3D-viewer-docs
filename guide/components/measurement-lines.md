# MeasurementLines

## Description

Renders a line between two or more points in a three.js scene. This component can be used to visualize measurements, such as the distance between two points or the length of a curve.

The `MeasurementLines` component works by first creating a three.js BufferGeometry object from the `points` prop. This geometry object is then passed to a three.js LineBasicMaterial object, which is used to render the line in the scene. The styling options for the line are set on the material object.

The `setLineDistance` prop is passed to a `useEffect` hook, which causes the function to be called whenever the distance of the line changes. The function calculates the distance of the line by summing the distances between each pair of points in the `points` array.

The `MeasurementLines` component also uses a `useMemo` hook to compute the total distance of the line.

## Props

- `points`: An array of three.js Vector3 objects representing the points that the line should pass through. **Required.**
- `styles`: An object containing the styling options for the line, such as its color, opacity, line width, line cap, and line join. **Optional.**
- `setLineDistance`: A function that will be called with the distance of the line in meters. **Optional.**

## Styling options

- `color`: The color of the line. Default: 0xffffff (white).
- `opacity`: The opacity of the line. Default: 1 (fully opaque).
- `lineWidth`: The width of the line in pixels. Default: 3.
- `lineCap`: The type of line cap to use. Possible values: `butt`, `round`, and `square`. Default: `round`.
- `lineJoin`: The type of line join to use. Possible values: `round`, `bevel`, and `miter`. Default: `round`.

## Usage

To use the `MeasurementLines` component, simply import it into your React project and pass it an array of three.js Vector3 objects representing the points that the line should pass through. You can also optionally pass an object containing styling options for the line.

For example, the following code will render a white line, 3 pixels wide, between the two points in the `points` array:

```jsx
import { MeasurementLines } from "./MeasurementLines";

const points = [
  new THREE.Vector3(-0.5, 0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
  new THREE.Vector3(0.5, 0.5, 0),
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(-0.5, -0.5, 0),
  new THREE.Vector3(-0.5, 0.5, 0),
];

<MeasurementLines name="measurementLines" points={linePoints} />;
```

<video src="/assets/mes-lines-vid.mp4"
alt="Video of MeasurementLines component"
title="Title" autoplay loop muted>
Your browser does not support the video tag.
</video>

**Customizing the appearance of the line:**

You can use the `styles` prop to customize the appearance of the line. For example, the following code will render a red line, 5 pixels wide, with a bevel line join:

```jsx
<MeasurementLines
  points={points}
  styles={{ color: 0xff0000, lineWidth: 5, lineJoin: "bevel" }}
/>
```

![Mes Lines Styling](/assets/mes-lines-styling.png)

**Getting the distance of the line:**

You can use the `setLineDistance` prop to get the distance of the line in meters. For example, the following code will print the distance of the line to the console:

```jsx
const setLineDistance = (distance) => {
  console.log("Distance:", distance);
};

<MeasurementLines points={points} setLineDistance={setLineDistance} />;
```

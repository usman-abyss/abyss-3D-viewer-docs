# Billboard Component

## Description

The `Billboard` component is a customizable 2D label that can be placed in a 3D scene. It is designed to display text with specified properties such as color, background color, font size, and position. The label can be made clickable to enable interaction with it in the 3D environment. It is most often used inside other components such as the `Marker` and `SvgMarker`.

It makes use of a Three.js sprite to display the text. The sprite is always facing the camera, which makes it appear as a 2D label in the 3D scene. More on sprites can be found [here](https://threejs.org/docs/#api/en/objects/Sprite).

## Helper functions

- `nearestPowerOf2(n)`: This function calculates the nearest power of 2 greater than or equal to the input number n. It is used to determine the dimensions of the label canvas.

- `makeLabelCanvas():` This function generates an HTML canvas with the specified text, font size, color, and background color. It is used to create the visual content of the label.

## Props

The `Billboard` component accepts the following props:

| Prop            | Type          | Description                                             |
| --------------- | ------------- | ------------------------------------------------------- |
| text            | string        | The text to be displayed on the label.                  |
| color           | string        | The color of the text.                                  |
| backgroundColor | string        | The background color of the label.                      |
| fontSize        | number        | The font size of the text.                              |
| baseWidth       | number        | The base width of the label.                            |
| position        | THREE.Vector3 | The 3D position where the label should be placed.       |
| fixedSize       | number        | An optional fixed size for the label.                   |
| clickable       | boolean       | A flag to make the label clickable (defaults to false). |

## Usage

```jsx
import { Billboard } from "@modules";

<Billboard
  text="Click here"
  backgroundColor="red"
  baseWidth={100}
  color="white"
  fontSize={20}
  position={[0, 0, 0]}
  clickable
  fixedSize={100}
/>;
```

![Billboard component](/assets/billboard_usage.png)

# WireframeBox

## Description

The WireframeBox component is a versatile tool that can be used in a variety of applications. It can be used to visualize the bounds of an object or scene, or to create a grid or other background element.

Here are some examples of how the WireframeBox component can be used:

- In a 3D modeling application, you could use the WireframeBox component to visualize the bounds of the selected object. This would help you to ensure that the object is within the desired dimensions and that it is not colliding with other objects in the scene.
- In a CAD application, you could use the WireframeBox component to create a grid or other background element. This would help you to position and align objects in the scene.
- In a game development application, you could use the WireframeBox component to create a wireframe representation of the level geometry. This would help you to debug the level and to ensure that it is playable.

The WireframeBox component is easy to use and can be customized to meet your specific needs. It is a valuable tool for any developer who is working with 3D graphics.

## Types

- `WireframeBoxProps`: An object with the following properties:
  - `box`: An object with two properties: `min` and `max`, which represent the minimum and maximum coordinates of the box, respectively.
  - `color`: A number representing the color of the wireframe box.

## Props

| Prop    | Type                       | Required | Description                                 |
| ------- | -------------------------- | -------- | ------------------------------------------- |
| `box`   | `WireframeBoxProps['box']` | Yes      | The bounds of the wireframe box.            |
| `color` | `number`                   | Yes      | The color of the wireframe box in hex code. |

## Usage

```javascript
import WireframeBox from "./WireframeBox";

const App = () => {
  const box = {
    min: [-1, -1, -1],
    max: [1, 1, 1],
  };

  return (
    <div>
      <WireframeBox box={box} color={0xffffff} />
    </div>
  );
};
```

This will render a white wireframe box with the specified dimensions.

**Example:**

```javascript
import WireframeBox from "./WireframeBox";

const MyComponent = () => {
  return (
    <WireframeBox
      box={{
        min: [-1, -3, -1],
        max: [1, 3, 1],
      }}
      color={0xffffff}
    />
  );
};
```

![Wireframe surrounding a chain link](/assets/wireframe_example.png)

This will render a white wireframe box around the chain link

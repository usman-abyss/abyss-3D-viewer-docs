# Marker

## Description

The Marker component is a versatile tool that can be used to add a variety of different markers to your Spherical Viewer. It can be used to indicate points of interest, provide additional information about the scene, or even create custom UI elements.

For example, you could use the Marker component to:

- Place markers on a map to indicate the locations of different businesses or attractions.
- Add markers to a product tour to highlight different features of a product.
- Create a marker that serves as a call to action, such as a button that users can click to learn more about something.
- Add a marker that displays a tooltip with additional information about a particular point of interest.
- Create a marker that allows users to interact with the scene in some way, such as a marker that opens a popup window or triggers a video to play.

In addition to being versatile, the Marker component is also highly customizable. You can control the shape, size, color, and opacity of the marker, as well as whether or not it shows a billboard. You can also specify a custom rotation for the marker, which can be useful for creating interesting effects.

To use the Marker component, simply import it into your React component and pass in the desired props. The required props are id and position. The id prop is used to uniquely identify the marker, and the position prop is used to specify the position of the marker in the scene.

All other props are optional. The text prop can be used to display text on the marker. The shapeType prop can be used to specify the shape of the marker. The style prop can be used to control the color, opacity, and size of the marker. The highlightedStyle prop can be used to control the appearance of the marker when it is highlighted. The billboard prop can be used to display a billboard above the marker. The rotation prop can be used to specify the rotation of the marker. The showBillboard prop can be used to control whether or not the billboard is displayed. And the onMarkerClick prop can be used to specify a callback function that is called when the marker is clicked.

## Types

```ts
export enum MarkerShapeType {
  SPHERE = 0,
  CYLINDER = 1,
  FLAG = 2,
}

export interface MarkerShapeStyle {
  color: string | THREE.Color;
  opacity: number;
  size: number;
}

export interface MarkerProps {
  id: string;
  text?: string;
  shapeType?: MarkerShapeType;
  style: MarkerShapeStyle;
  highlightedStyle?: MarkerShapeStyle;
  billboard?: Omit<BillboardProps, "text" | "position">;
  position: Parameters<THREE.Vector3["set"]>;
  rotation?: Parameters<THREE.Euler["set"]>;
  showBillboard?: boolean;
  onMarkerClick?: (markerId: string, button: number) => void;
}
```

## Props

| Prop name          | Type                                         | Description                                                    |
| ------------------ | -------------------------------------------- | -------------------------------------------------------------- |
| `id`               | `string`                                     | The id of the marker.                                          |
| `text`             | `string`                                     | The text to display.                                           |
| `shapeType`        | `MarkerShapeType`                            | The shape of the marker.                                       |
| `style`            | `MarkerShapeStyle`                           | The style of the marker.                                       |
| `highlightedStyle` | `MarkerShapeStyle`                           | The style of the marker when it is highlighted.                |
| `billboard`        | `Omit<BillboardProps, "text" \| "position">` | A `Billboard` to display on the marker.                        |
| `position`         | `Parameters<THREE.Vector3["set"]>`           | The position of the marker.                                    |
| `rotation`         | `Parameters<THREE.Euler["set"]>`             | The rotation of the marker.                                    |
| `showBillboard`    | `boolean`                                    | A flag to show the Billboard component.                        |
| `onMarkerClick`    | `(markerId: string, button: number) => void` | A callback function to be executed when the marker is clicked. |

## Usage

```tsx
import Marker from "./Marker";

const marker = (
  <Marker
    id="my-marker"
    text="My Marker"
    style={{ color: "red" }}
    position={[0, 0, 0]}
  />
);
```

This will create a red sphere marker at the position (0, 0, 0).

You can also use the `highlightedStyle` prop to change the style of the marker when it is highlighted. For example:

```tsx
const marker = (
  <Marker
    id="my-marker"
    text="My Marker"
    style={{ color: "red" }}
    highlightedStyle={{ color: "yellow" }}
    position={[0, 0, 0]}
  />
);
```

This will make the marker turn yellow when it is highlighted.

You can also use the `billboard` prop to display a billboard on the marker. For example:

```tsx
const marker = (
  <Marker
    id="my-marker"
    text="My Marker"
    style={{ color: "red" }}
    billboard={{ color: "white", backgroundColor: "black" }}
    position={[0, 0, 0]}
  />
);
```

This will display a white billboard with black text on the marker.

The `onMarkerClick` prop can be used to add a click handler to the marker. For example:

```tsx
const marker = (
  <Marker
    id="my-marker"
    text="My Marker"
    style={{ color: "red" }}
    onMarkerClick={() => alert("Marker clicked!")}
    position={[0, 0, 0]}
  />
);
```

This will call the `onMarkerClick` callback function when the marker is clicked.

## Extensive description

The Marker component can be used to display markers on a 3D scene. It supports a variety of shapes, styles, and features, making it a versatile tool for creating custom markers.

The `shapeType` prop can be used to specify the shape of the marker. The supported shapes are:

- SPHERE
- CYLINDER
- FLAG

The `style` prop can be used to specify the style of the marker. The supported style options are:

- color
- opacity
- size

The `highlightedStyle` prop can be used to specify the style of the marker when it is highlighted. The supported style options are the same as the `style` prop.

The `billboard` prop can be used to display a billboard on the marker.

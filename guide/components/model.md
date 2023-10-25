# Model

## Description

The `Model` component renders a 3D model to the screen. It can be used to display a variety of different 3D model formats, such as GLTF, OBJ, and FBX.

## Types

- `ModelProps` - The props that are passed to the `Model` component.
- `MaterialProps` - The props that are passed to the `Model` component's `material` prop.

## Helper functions

- `useGLTF`: A hook that loads a 3D model file.

## Props

| Prop                    | Type                                          | Description                                                                   |
| ----------------------- | --------------------------------------------- | ----------------------------------------------------------------------------- |
| `url`                   | string                                        | The URL of the 3D model file.                                                 |
| `position`              | [number, number, number]                      | The position of the model in 3D space.                                        |
| `rotation`              | [number, number, number]                      | The rotation of the model in 3D space.                                        |
| `scale`                 | [number, number, number]                      | The scale of the model in 3D space.                                           |
| `material`              | MaterialProps                                 | An object containing the material properties for the model.                   |
| `isVisible`             | boolean                                       | A boolean value indicating whether the model should be visible.               |
| `onViewerObjectReady`   | (isReady: boolean) => void                    | A callback function that is called when the model is ready to be displayed.   |
| `addMaterial`           | (material: THREE.Material) => void            | A callback function that is used to add a material to the model.              |
| `removeMaterial`        | (material: THREE.Material) => void            | A callback function that is used to remove a material from the model.         |
| `addTransformTarget`    | (id: string, target: TransformTarget) => void | A callback function that is used to add a transform target to the model.      |
| `removeTransformTarget` | (id: string) => void                          | A callback function that is used to remove a transform target from the model. |

## File format

The URL prop expects a .glb file. The GLB file format is a lightweight and efficient way to share 3D models on the web. It is smaller and faster to load than the GLTF file format, and it is supported by a wider range of browsers and devices. The `Model` component supports the GLB file format, so you can easily use it to render 3D models in your React applications.

## Usage

To use the `Model` component, simply import it into your React component and then pass it the props that you want to use. For example:

```jsx
import Model from "./Model";

const MyComponent = () => {
  return (
    <Model
      url="https://example.com/model.gltf"
      position={[1, 2, 3]}
      rotation={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
    />
  );
};
```

This will render a 3D model at the point (1, 2, 3) in 3D space, and the model will be scaled to half its original size.

You can also use the `Model` component's props to control the visibility of the model, add and remove materials, and add and remove transform targets.

Here is an example of how to use the `Model` component to add a material to the model:

```jsx
const MyComponent = () => {
  const material = new THREE.MeshPhongMaterial({ color: "red" });

  return <Model url="https://examples.com/panda.glb" material={material} />;
};
```

This will render a 3D model with a red material.

# Utility Functions

## `computeBoundingBox`

The `computeBoundingBox` function is a utility function that operates within a Three.JS, specifically the Three.js library. It calculates the bounding box of a 3D object, taking into account its geometry, transformation, and any potential parent transformations. This bounding box is defined by two points, the minimum and maximum extents of the object along the X, Y, and Z axes. This function is particularly useful for various 3D rendering and manipulation tasks.

### Parameters

- `object` (Type: `THREE.Object3D`): The 3D object for which the bounding box needs to be computed.

### Return Value

- An object containing the bounding box information, with the following properties:
  - `min` (Type: `Array`): An array representing the minimum extents of the bounding box along the X, Y, and Z axes.
  - `max` (Type: `Array`): An array representing the maximum extents of the bounding box along the X, Y, and Z axes.

### Description

The `computeBoundingBox` function calculates the bounding box for a given 3D object by following these steps:

1. It creates a deep copy of the input object to avoid altering the original object during calculations.

2. It updates the world transformation matrix of the copied object, ensuring that any parent transformations are taken into account.

3. It traverses through the object's children, specifically meshes, to ensure that the geometry of each child has world coordinates.

4. For each mesh encountered, it clones the geometry and applies the matrix representing the mesh's world transformation to the cloned geometry. This step ensures that the geometry has the correct world coordinates.

5. It computes the bounding box for the modified geometry.

6. It resets the transformation matrices of the object's children to their default values (position, rotation, and scale).

7. It updates the world transformation matrix of the copied object again.

8. It re-traverses through the object's children and computes the bounding box once more to account for the updated transformations.

9. Finally, it returns an object with the `min` and `max` properties, where `min` is an array representing the minimum extents of the bounding box, and `max` is an array representing the maximum extents of the bounding box.

### Usage Example

```javascript
import * as THREE from "three";

// Create a 3D object, e.g., a mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

// Compute the bounding box
const boundingBox = computeBoundingBox(mesh);

// Access the minimum and maximum extents
const minExtents = boundingBox.min;
const maxExtents = boundingBox.max;

console.log("Minimum Extents:", minExtents);
console.log("Maximum Extents:", maxExtents);
```

## `disposeMaterials`

This utility function is used to dispose of materials in a THREE.js-based 3D application. Disposing of materials is important for releasing resources and preventing memory leaks in WebGL-based applications.

### Parameters

- `materials` (Type: `THREE.Material` or `THREE.Material[]`): This parameter can be either a single material or an array of materials to be disposed of. Materials are used to define the appearance of 3D objects in a scene.

### Usage Example

```javascript
// Example 1: Disposing of a single material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
disposeMaterials(material);

// Example 2: Disposing of an array of materials
const materialsArray = [
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshPhongMaterial({ color: 0x0000ff }),
];
disposeMaterials(materialsArray);
```

## `positionRotationFromMatrix4`

This utility function is designed to extract the position and rotation information from a transformation matrix in the THREE.js library. It takes a Matrix4 transformation matrix as input and returns an object with two properties: position and rotation. This can be useful for scenarios where you need to work with the position and rotation of objects in a 3D scene.

### Parameters

- `transform` (Type: `Matrix4`): A `Matrix4` transformation matrix from which position and rotation information will be extracted.

### Return Value

An object with two properties:

- `position` (Type: `Vector3`): A 3D vector representing the position of the object.
- `rotation` (Type: `Vector3`): A 3D vector representing the rotation (Euler angles) of the object.

### Usage Example

```javascript
// Example 1: Extracting position and rotation from a Matrix4
const matrix = new THREE.Matrix4();
// ... Apply transformations to the matrix ...

const { position, rotation } = positionRotationFromMatrix4(matrix);
console.log("Position:", position);
console.log("Rotation:", rotation);
```

## `alignModelByTwoVectors`

This utility function is used to align a 3D model's transformation matrix with two specified directions using quaternion rotation. It takes an initial transformation matrix (`Matrix4`), two direction vectors (`Vector3`) - `fromDirection` and `toDirection`, and returns a new transformation matrix with the model's orientation adjusted to align the `fromDirection` with the `toDirection`.

### Parameters

- `fromDirection` (Type: `Vector3`): The initial direction of the model that you want to align.
- `toDirection` (Type: `Vector3`): The target direction to which you want to align the model.
- `transform` (Type: `Matrix4`): The initial transformation matrix of the 3D model that you want to adjust.

### Return Value

- A new `Matrix4` transformation matrix representing the adjusted orientation of the 3D model.

### Usage Example

```javascript
// Example: Align a 3D model to face a new direction
const fromDirection = new THREE.Vector3(0, 0, 1); // Initial direction
const toDirection = new THREE.Vector3(1, 0, 0); // Target direction

const initialTransformMatrix = new THREE.Matrix4();
// ... Apply initial transformations to the matrix ...

const adjustedTransformMatrix = alignModelByTwoVectors(
  fromDirection,
  toDirection,
  initialTransformMatrix
);
```

## `alignModelByTwoPoints`

This utility function is used to align a 3D model's transformation matrix with two specified points in 3D space. It calculates the direction vector between the two points and aligns the model's orientation to that direction while keeping a fixed "up" direction (the positive z-axis by default). This is particularly useful for orienting objects in 3D scenes to face specific points.

### Parameters

- a (Type: `PointCoordinates`): The coordinates of the first point.
- b (Type: `PointCoordinates`): The coordinates of the second point.
- transform (Type: `Matrix4`): The initial transformation matrix of the 3D model that you want to adjust.

### Return Value

- A new `Matrix4` transformation matrix representing the adjusted orientation of the 3D model, aligning it with the direction from point `a` to point `b`.

### Usage Example

```javascript
// Example: Align a 3D model between two points
const pointA = { x: 0, y: 0, z: 0 };
const pointB = { x: 1, y: 1, z: 1 };

const initialTransformMatrix = new THREE.Matrix4();
// ... Apply initial transformations to the matrix ...

const adjustedTransformMatrix = alignModelByTwoPoints(
  pointA,
  pointB,
  initialTransformMatrix
);
```

## `renderReactElementToString`

This utility function renders a React element into its HTML string representation. It creates a temporary container element, renders the React element within it, and then extracts the HTML string from the container.

### Parameters

- `elt` (Type: `ReactElement<any>`): The React element that you want to render to an HTML string.

### Return Value

- A string representing the HTML content of the React element.

### Usage Example

```javascript
import { render } from "react-dom";
import { createElement } from "react";

const myElement = createElement("div", null, "Hello, World!");

const htmlString = renderReactElementToString(myElement);
console.log(htmlString); // Outputs: "<div>Hello, World!</div>"
```

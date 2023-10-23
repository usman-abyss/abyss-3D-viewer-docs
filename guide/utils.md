# Utulity Functions

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

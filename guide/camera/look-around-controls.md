# LookAroundControls

The `LookAroundControls` class provides a way to control a camera in 3D space using a mouse or touch device. It is useful for creating first-person or third-person camera controls.

## Usage

`LookAroundControls` is only used a class member of a larger camera control class, called `NavigationControls`

## Properties

The `LookAroundControls` class has a number of properties that can be used to customize its behavior:

- `hspeed`: The horizontal sensitivity of the camera controls.
- `vspeed`: The vertical sensitivity of the camera controls.
- `zoomStep`: The amount by which the camera zooms in or out when the mouse wheel is scrolled.
- `minFov`: The minimum field of view of the camera.
- `maxFov`: The maximum field of view of the camera.
- `onMove`: A callback function that is called whenever the camera moves.

## Class Methods

The `LookAroundControls` class has the following class methods:

- **activate()**

Activates the controls, which means that they will start listening for user input.

- **deactivate()**

Deactivates the controls, which means that they will stop listening for user input.

- **dispose()**

Cleans up any resources that are being used by the class. This should be called when the controls are no longer needed.

- **shouldReactOnEvent()**

Determines whether or not the controls should react to a given event. This method is typically used to prevent the controls from reacting to certain events, such as right-click events.

## Example

The following example shows how to use the `LookAroundControls` class to control a camera in a 3D point cloud visualisation:

```javascript
import { LookAroundControls } from "abyss-3d-viewer";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Create a point cloud geometry.
const pointCloudGeometry = new THREE.PointCloudGeometry(10000);

// Create a point cloud material.
const pointCloudMaterial = new THREE.PointCloudMaterial({
  size: 1,
  color: 0xffffff,
});

// Create a point cloud object.
const pointCloud = new THREE.PointCloud(pointCloudGeometry, pointCloudMaterial);

// Add the point cloud object to the scene.
scene.add(pointCloud);

// Create a camera.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

// Create a LookAroundControls object.
const controls = new LookAroundControls(camera, document.body);

// Activate the controls.
controls.activate();

// Render the scene.
renderer.render(scene, camera);

// Update the camera position on every frame.
function animate() {
  requestAnimationFrame(animate);

  // Update the controls.
  controls.update();

  renderer.render(scene, camera);
}

animate();
```

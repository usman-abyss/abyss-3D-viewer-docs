# NavigationControls

The NavigationControls class provides a unified way to control a camera in 3D space using a mouse or touch device. It supports two different types of camera controls: orbit controls and look around controls.

**Orbit controls** allow the user to rotate, pan, and zoom the camera around a target point. **Look around controls** allow the user to look around the scene as if they were physically present.

## Usage

To use the NavigationControls class, you first need to create an instance of it and pass in the camera and DOM element that you want to control. You can then set the `controlType` property to specify which type of camera controls you want to use. By default, the `controlType` property is set to `NavigationControlType.Orbit`.

To activate the camera controls, call the `setIsEnabled()` method and set the `isEnabled` parameter to `true`. To deactivate the camera controls, call the `setIsEnabled()` method and set the `isEnabled` parameter to `false`.

You can also use the `setRotationSpeed()` method to set the rotation speed of the camera.

## Properties

The NavigationControls class has the following properties:

- `camera`: The camera that the controls will control.
- `domElement`: The DOM element that the controls will listen for user input on.
- `orbitControls`: The OrbitControls instance that is used for orbit controls.
- `lookAroundControls`: The LookAroundControls instance that is used for look around controls.
- `controlType`: The type of camera controls that are currently being used.
- `isEnabled`: A boolean value that indicates whether or not the camera controls are enabled.

## Class Methods

The NavigationControls class has the following class methods:

- `setRotationSpeed(rotationSpeed: number)`: Sets the rotation speed of the camera.
- `setIsEnabled(isEnabled: boolean)`: Enables or disables the camera controls.
- `setControlType(controlType: NavigationControlType)`: Sets the type of camera controls that are currently being used.
- `lookAt(target: THREE.Vector3)`: Looks at the given target point.
- `update()`: Updates the camera controls.
- `dispose()`: Disposes of the camera controls.

## Example

The following example shows how to use the NavigationControls class to control a camera in a 3D point cloud visualisation:

```javascript
import { NavigationControls } from "./NavigationControls";

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

// Create a NavigationControls object.
const controls = new NavigationControls(camera, document.body);

// Render the scene.
renderer.render(scene, camera);

// Update the camera controls on every frame.
function animate() {
  requestAnimationFrame(animate);

  // Update the controls.
  controls.update();

  renderer.render(scene, camera);
}

animate();
```

## Switching between camera control types

You can switch between camera control types by calling the `setControlType()` method. For example, the following code switches the camera controls to look around mode:

```javascript
controls.setControlType(NavigationControlType.LookAround);
```

## Looking at a target point

You can look at a target point by calling the `lookAt()` method. For example, the following code looks at the point cloud object:

```javascript
controls.lookAt(pointCloud.position);
```

## Disposing of the camera controls

When you are finished using the camera controls, you should call the `dispose()` method to clean up any resources that are being used.

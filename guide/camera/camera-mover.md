# CameraMover

## Overview

The CameraMover class provides a way to smoothly move the camera in 3D space. It is useful for creating cinematic camera movements or for simply moving the camera to a new position and direction in a smooth and controlled way.

## Usage

To use the CameraMover class, you first need to create an instance of it and pass in the NavigationControls instance that you want to use. You can then call the `moveCameraTo()` or `moveCameraToTarget()` method to move the camera to the desired position and direction.

**Arguments**

The `moveCameraTo()` method takes the following arguments:

- `cameraPos`: The desired position of the camera.
- `targetPos`: The desired look-at point of the camera.
- `zoom`: The desired zoom level of the camera.
- `transitionTime`: The duration of the transition in seconds.
- `onComplete`: A callback function that is called when the transition is complete.

The `moveCameraToTarget()` method takes the same arguments as the `moveCameraTo()` method, but it also takes a `CameraTargetProps` object. The `CameraTargetProps` object contains the following properties:

- `position`: The desired position of the camera.
- `lookAt`: The desired look-at point of the camera.
- `zoom`: The desired zoom level of the camera.

**Return value**

Both the `moveCameraTo()` and `moveCameraToTarget()` methods return a boolean value indicating whether the transition was started successfully.

**Example**

The following example shows how to use the CameraMover class to move the camera to a new position and direction:

```javascript
const navigationControls = new NavigationControls(camera, document.body);
const cameraMover = new CameraMover(navigationControls);

cameraMover.moveCameraTo(
  new Vector3(10, 10, 10),
  new Vector3(0, 0, 0),
  1,
  1,
  () => {
    // The camera has moved to the new position and direction.
  }
);
```

## Class Members

CameraMover class has the following class members:

- **fromPos:** The initial position of the camera.
- **fromTarget:** The initial look-at point of the camera.
- **fromDir:** The initial direction of the camera.
- **toPos:** The desired position of the camera.
- **toTarget:** The desired look-at point of the camera.
- **toDir:** The desired direction of the camera.
- **fromZoom:** The initial zoom level of the camera.
- **toZoom:** The desired zoom level of the camera.
- **transitionTime:** The duration of the transition in seconds.
- **startTime:** The time at which the transition started.
- **isMoving:** A boolean value indicating whether the transition is currently in progress.
- **savedEnableDamping:** The value of the `enableDamping` property on the NavigationControls instance before the transition started.
- **quaternion:** A quaternion representing the camera's rotation.
- **quaternionInverse:** The inverse of the `quaternion` property.
- **localUp:** A vector representing the local up direction of the camera.
- **fromSpherical:** A spherical coordinate representation of the `fromDir` property.
- **toSpherical:** A spherical coordinate representation of the `toDir` property.
- **curSpherical:** A spherical coordinate representation of the camera's current position.
- **curVector3:** A vector representation of the camera's current position in Cartesian coordinates.
- **curTarget:** The camera's current look-at point.
- **invalidateFrame:** A callback function that is used to request a new frame render.
- **onComplete:** A callback function that is called when the transition is complete.

## Class Methods

The CameraMover class has the following class methods:

**moveCameraTo()**

Moves the camera to the desired position and direction over a specified period of time.

**Arguments:**

- `cameraPos`: The desired position of the camera.
- `targetPos`: The desired look-at point of the camera.
- `zoom`: The desired zoom level of the camera.
- `transitionTime`: The duration of the transition in seconds.
- `onComplete`: A callback function that is called when the transition is complete.

**Return value:** A boolean value indicating whether the transition was started successfully.

**moveCameraToTarget()**

Moves the camera to the look-at point of the given target over a specified period of time.

**Arguments:**

- `target`: The target to move the camera to.
- `transitionTime`: The duration of the transition in seconds.
- `onComplete`: A callback function that is called when the transition is complete.

**Return value:** A boolean value indicating whether the transition was started successfully.

**update()**

Updates the camera's position and rotation based on the current state of the transition. This method should be called on every frame to ensure that the camera moves smoothly.

**Arguments:**

- `now`: The current time in milliseconds.

**Return value:** None.

These class methods can be used to smoothly move the camera in 3D applications.

## Properties

The CameraMover class has the following properties:

- `transitionTime`: The duration of the current transition in seconds.
- `onComplete`: A callback function that is called when the current transition is complete.

## Limitations

The CameraMover class only works with perspective and orthographic cameras. It also does not support animating the camera's field of view.
use and provides a number of features that make it a powerful tool for camera control.

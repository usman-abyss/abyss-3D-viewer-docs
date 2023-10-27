# Helpers

## ColorMap

The `ColorMap` class represents a color map for a point cloud material. It is responsible for managing colors and efficiently updating them. This class is designed for use in the context of rendering 3D point clouds with THREE.js.

### Constructor

```javascript
constructor(maxId: number, colors?: Map<number, number> | undefined, defaultColor?: number | undefined, invalidateFrame?: () => void)
```

- `maxId`: The maximum number of colors in the color map.
- `colors`: A map of color values for specific IDs (optional).
- `defaultColor`: The default color to use if no color is specified.
- `invalidateFrame`: A callback function to trigger when the color map is updated (optional).

### Properties

- `maxId` (Type: `number`): The maximum ID for the color map.
- `textureSize` (Type: `{ width: number; height: number }`): The size of the texture used to store colors.
- `colorBuf` (Type: `Uint8Array`): An array used to store color data.
- `texture` (Type: `THREE.DataTexture`): A THREE.js `DataTexture` used for storing color data.
- `invalidateFrame` (Type: `(() => void) | undefined`): A function that can be called to invalidate a frame (optional).

### Methods

- `get cardinality()`: A property that calculates the cardinality of the color map based on the texture height. Returns 1 if the height is 1, otherwise 2.
- `clear(defaultColor: number)`: Fills the color buffer with the specified default color.
- `setColor(id: number, color: number)`: Sets the color of a specific ID in the color map and updates the texture.
- `getColor(id: number)`: Retrieves the color of a specific ID from the color map.
- `createColorBuf(colors?: Map<number, number>, defaultColor?: number)`: Creates the initial color buffer based on provided colors and a default color.
- `setInvalidateFrame(newInvalidateFrame: () => void)`: Sets the function to invalidate a frame (useful for triggering rendering updates).

### Usage Example

```javascript
// Create a ColorMap with a maximum ID of 100, a default color, and a rendering update function.
const colorMap = new ColorMap(100, undefined, 0xff0000, () => {
  /* Update rendering */
});

// Set the color of an ID to blue.
colorMap.setColor(5, 0x0000ff);

// Retrieve the color of an ID.
const retrievedColor = colorMap.getColor(5);
console.log(retrievedColor); // Outputs: 255

// Clear the color map with a new default color.
colorMap.clear(0x00ff00);
```

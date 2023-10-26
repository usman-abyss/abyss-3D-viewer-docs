# OctreePointCloudMasterImpl

The `OctreePointCloudMasterImpl` class is a key component, that manages level-of-detail (LoD) for Octrees in a 3D scene. It orchestrates the loading and display of Octree nodes, ensuring that the most relevant nodes are shown based on the camera's position and the available point budget. Let's go over this class in detail:

The class works by first calculating the visibility box of the camera. This is a bounding box that contains all of the points in the point cloud that are visible to the camera. The class then pushes all of the octree nodes that intersect the visibility box to a queue.

The class then iterates over the queue, and for each node, it calculates the distance between the node's bounding sphere and the camera. If the node is too small on the screen, the class skips it. Otherwise, the class adds the node to a list of nodes to be rendered.

The class also maintains a budget for the number of points that can be rendered. If the number of points in the list of nodes to be rendered exceeds the budget, the class removes the nodes with the lowest priority from the list.

The calculateOctreeNodesToShow() method is the main public method of the class. This method takes no input and returns a list of octree nodes that should be rendered.

## Member Variables:

1. `camera`: This variable holds a reference to the current perspective camera, allowing the class to access the camera's properties.

2. `renderer`: This variable holds a reference to the WebGLRenderer, which is used for rendering the 3D scene.

3. `octrees`: An array that stores Octree instances. These Octrees are managed by this class, and their nodes are considered for loading and display.

4. `lastCameraPosition`: A Vector3 instance that stores the last known position of the camera. This information is used to determine when the camera's position has changed significantly.

5. `rendererSize`: A Vector2 instance that stores the size of the renderer's canvas. This information is used to calculate screen pixel radius for LoD.

6. `slope` and `halfHeight`: These variables are used in the calculation of the screen pixel radius for LoD. The `slope` represents the tangent of half the camera's field of view, and `halfHeight` is half the height of the renderer's canvas.

7. `pointBudget` and `invisiblePointBudget`: These variables store the total point budget and the budget for invisible points. They are used to control the number of points that can be displayed.

8. `needsUpdate`: A boolean flag that indicates whether an update is required.

9. `visibilityBox`: A Box3 instance representing the volume of the camera's frustum. This box is used to cull Octree nodes that are outside of the camera's view.

10. `queue`: A binary heap (priority queue) that stores `QueueItem` objects. These items represent Octree nodes and are used to determine which nodes to load and display.

11. `frustum` and `frustumMatrix`: These objects are used to define the camera's frustum and the transformation matrix for the frustum.

## Methods:

- `setCamera(camera: PerspectiveCamera | undefined)`: This method sets the camera used for rendering. It takes a `PerspectiveCamera` instance or `undefined` if the camera is not available.

- `setRenderer(renderer: WebGLRenderer)`: This method sets the WebGLRenderer for rendering the scene.

- `setVisibilityBox(visibilityBox: THREE.Box3)`: This method sets the visibility box, which represents the camera's frustum.

- `setPointBudget(pointBudget: number, invisiblePointsBudgetRatio: number)`: This method sets the point budget and the budget for invisible points. It recalculates the invisible point budget based on the ratio provided.

- `addOctree(octree: Octree)`: This method adds an Octree to the list of managed Octrees.

- `removeOctree(octree: Octree)`: This method removes an Octree from the list of managed Octrees.

- `pushNodeToQueue(octree: Octree, octreeNode: OctreeNode)`: This method adds an Octree node to the queue if it satisfies certain conditions. These conditions include checking if the node is within the visibility box and its screen pixel radius.

- `calculateOctreeNodesToShow()`: This method calculates which Octree nodes should be displayed based on the camera's frustum, point budget, and other criteria. It populates the priority queue (`queue`) with the nodes to load and display.

## `calculateOctreeNodesToShow()` Method:

Here is a step-by-step explanation of how the calculateOctreeNodesToShow() method works:

1. Check if the camera and renderer are defined. If not, return an empty list.
2. Calculate the frustum of the camera. The frustum is a pyramid-shaped volume that defines the field of view of the camera.

3. Calculate the half-height of the renderer. This is the distance from the center of the renderer to the top of the renderer.
4. Calculate the slope of the camera. This is the tangent of the field of view of the camera.
5. Iterate over the octrees and push the root node of each octree to the queue.
6. Create two lists: nodesToLoad and invisibleNodesToLoad. These lists will store the octree nodes that should be rendered and the octree nodes that should be loaded but not rendered, respectively.
7. While the number of visible points in the list of nodes to be rendered is less than the visible point budget and the number of invisible points in the list of nodes to be rendered is less than the invisible point budget:

   - Pop the queue and get the next octree node.
   - Check if the octree node is visible to the camera.
   - If the octree node is visible, add it to the list of nodes to be rendered.
   - Otherwise, add it to the list of invisible nodes to be loaded.
   - Push the children of the octree node to the queue.

8. Clear the queue.
9. Add the invisible nodes to the list of nodes to be rendered.
10. Return the list of nodes to be rendered.

---

Overall, the `OctreePointCloudMasterImpl` class is responsible for managing the LoD of Octrees within a 3D scene. It performs calculations to determine which nodes should be displayed based on the camera's position and budget constraints and provides methods to set the camera, renderer, point budget, and visibility box. This class is a crucial component for optimizing the rendering of large point cloud datasets.

# Props

## onSceneLoaded

The `onSceneLoaded` prop resets the camera positions to default once the 3D View is rendered.

**Prop Definition**

```typescript
onSceneLoaded?: () => void;
```

## onInitialPointCloudLoad

The `onInitialPointCloudLoad` resets the camera position to default.

**Prop Definition**

```typescript
onInitialPointCloudLoad?: () => void;
```

## cameraTarget

The `cameraTarget` controls the camera position, and determines the part of the 3D View to look at.

**Prop Definition**

```typescript
interface CameraTargetProps {
  sequenceKey: number;
  position: Parameters<THREE.Vector3['set']>;
  lookAt: Parameters<THREE.Vector3['set']>;
  zoom?: number;
};

cameraTarget?: CameraTargetProps;
```

## navigationControls

The `navigationControls` is used to control camera navigation.

**Prop Definition**

```typescript
interface NavigationControlsProps {
  lookAround?: LookAroundControlsProps;
  orbit?: {
    rotationSpeed?: number;
  };
};

navigationControls?: NavigationControlsProps;
```

## visibilityBox

The `visibilityBox` prop is used to draw a bounding box.

**Prop Definition**

```typescript
interface VisibilityBoxProps {
  mode: VisibilityBoxMode;
  min: [x: number, y: number, z: number];
  max: [x: number, y: number, z: number];
  step: [x: number, y: number, z: number];
};

visibilityBox?: VisibilityBoxProps;
```

## setVisibilityBox

The `setVisibilityBox` is used to set visibilityBox state. Visibility box can have three modes - `Disabled, Enabled, Adjusted`.

**Prop Definition**

```typescript
interface VisibilityBoxProps {
  mode: VisibilityBoxMode;
  min: [x: number, y: number, z: number];
  max: [x: number, y: number, z: number];
  step: [x: number, y: number, z: number];
};

enum VisibilityBoxMode {
  Disabled,
  Enabled,
  Adjusting,
};

setVisibilityBox?: (newBox: VisibilityBoxProps) => void;
```

## transformControls

The `transformControls` is used to transform objects in 3D space, but does not transform the scene's camera.

**Prop Definition**

```typescript
interface TransformControlsProps {
  isEnabled: boolean;
  mode: TransformMode;
  space: TransformSpace;
  size: number;
  target: string;
};

enum TransformMode {
  Translate,
  Rotate,
  Scale,
};

enum TransformSpace {
  Local,
  World,
};

transformControls?: TransformControlsProps;
```

## brushTool

The `brushTool` prop - if enabled - can be used to select and brush over the selected points.

**Prop Definition**

```typescript
interface BrushToolProps {
  isEnabled: boolean;
  onBrushing: (brushingUpdate: BrushingEvent) => void;
  brushSize?: number;
};

brushTool?: BrushToolProps;
```


## models

The `models` prop is used to render a 3D model on the screen.

**Prop Definition**

```typescript
interface MaterialProps {
  color?: string;
  transparent?: boolean;
  opacity?: number;
  side?: Side;
};

interface ModelProps extends ViewerObjectProps {
  url: string;
  position?: Parameters<THREE.Vector3['set']>;
  rotation?: Parameters<THREE.Vector3['set']>;
  scale?: Parameters<THREE.Vector3['set']>;
  material?: MaterialProps;
};

models?: ModelProps[];
```

## markers

The `markers` prop is used to display markers on the 3D Image. These markers can be used to identify the camera locations, point of interests, etc.

**Prop Definition**

```typescript
enum MarkerShapeType {
  SPHERE = 0,
  CYLINDER = 1,
  FLAG = 2,
};

interface MarkerShapeStyle {
  color: string | THREE.Color;
  opacity: number;
  size: number;
};

interface MarkerProps {
  id: string;
  text?: string;
  shapeType?: MarkerShapeType;
  style: MarkerShapeStyle;
  highlightedStyle?: MarkerShapeStyle;
  billboard?: Omit<BillboardProps, 'text' | 'position'>;
  position: Parameters<THREE.Vector3['set']>;
  rotation?: Parameters<THREE.Euler['set']>;
  showBillboard?: boolean;
  onMarkerClick?: (markerId: string, button: number) => void;
};

markers?: Omit<MarkerProps, 'onMarkerClick'>[];
```

## svgMarkers

The `svgMarkers` prop is used to display point of interest markers on the 3D Image. 

**Prop Definition**

```typescript
interface MarkerLineStyleProps {
  color: number | string | THREE.Color;
  lineWidth: number;
  dashed: boolean;
};

interface MarkerSphereStyleProps {
  color: number | string | THREE.Color;
  opacity?: number;
  size?: number;
  emissiveIntensity?: number;
};

interface SvgMarkerProps {
  position: Parameters<THREE.Vector3['set']>;
  rotation?: Parameters<THREE.Euler['set']>;
  svgComp: string;
  scale?: number;
  markerHeight?: number;
  markerLineStyle?: MarkerLineStyleProps;
  markerSphereStyle?: MarkerSphereStyleProps;
  hoveredComp?: string;
  hoveredScale?: number;
  hoveredMarkerSphereStyle?: MarkerSphereStyleProps;
  onMarkerClick?: () => void;
};

svgMarkers?: SvgMarkerProps[];
```

## segments

The `segments` prop 

**Prop Definition**

```typescript
enum SegmentVariants {
  LinesAndWireframeMesh,
  LinesAndTransparentMesh,
  LinesOnly,
};

interface SegmentProps extends ViewerObjectProps {
  lineColor: number;
  lineWidth: number;
  lineOpacity: number;
  fillColor: number;
  fillOpacity: number;
  bounds: BoundingBox;
  label?: string;
  variant?: SegmentVariants;
};

segments?: SegmentProps[];
```

## pointCloudMaterials

The `pointCloudMaterials` prop 

**Prop Definition**

```typescript
interface PointCloudMaterialProps {
  // Color is defined as four component hex string: "#rrggbbaa" in Map<number, string>
  // Map<number, string> is deprecated, use ColorMap instead
  colorMap?: Map<number, string> | ColorMap;
  visibilityMap?: ColorMap;
  visibilityMapForPicking?: ColorMap;
  // defaultColor is deprecated, use ColorMap instead
  defaultColor?: string;
  pointSize?: number;
  attributeName: string;
  visibilityAttributeName?: string;
  // true -> attribute contains rgb colors; false|undefined -> attribute contains ids
  isColor?: boolean;
  // true -> should blend rgb colors with annotation color
  hasColor?: boolean;
};

pointCloudMaterials?: Map<string, PointCloudMaterialProps>;
```

## simplePointClouds

The `simplePointClouds` prop 

**Prop Definition**

```typescript
interface Field {
  name: string;
  type?: string;
  offset: number;
  size?: number;
  maxId?: number;
};

interface DataFormat {
  recordSize: number;
  fields: Field[];
};

interface SimplePointCloudProps extends ViewerObjectProps {
  url: string;
  requestHeader?: { [header: string]: string };
  dataFormat?: DataFormat;
  material: string;
  showInSphericalView?: boolean;
  position?: Parameters<THREE.Vector3['set']>;
  rotation?: Parameters<THREE.Vector3['set']>;
};

simplePointClouds?: SimplePointCloudProps[];
```

## pointClouds

The `pointClouds` prop is used to pass the octree point cloud path of the image to render.

**Prop Definition**

```typescript
interface OctreePointCloudProps extends ViewerObjectProps {
  url: string;
  requestHeader?: { [header: string]: string };
  material: string;
  nodesToShow?: Set<string>;
};

pointClouds?: OctreePointCloudProps[];
```

## pointBudget

The `pointBudget` prop is used to control the number of props loaded and rendered at any given time.

**Prop Definition**

```typescript
pointBudget?: number;
```

## invisiblePointsBudgetRatio

The `invisiblePointsBudgetRatio` prop 

**Prop Definition**

```typescript
invisiblePointsBudgetRatio?: number;
```

## showPointCloudsInSphericalView

The `showPointCloudsInSphericalView` prop is used to show/hide point clouds when a user navigates to image view from 3D View.

**Prop Definition**

```typescript
showPointCloudsInSphericalView?: boolean;
```

## sphericalImageSets

The `sphericalImageSets` prop is used to rpass a list of spherical locations to be rendered on the screen.

**Prop Definition**

```typescript
interface SphericalImageProps extends ViewerObjectProps {
  url: string;
  name: string;
  requestHeader?: { [header: string]: string };
  position: Parameters<THREE.Vector3['set']>;
  rotation: Parameters<THREE.Vector3['set']>;
  imageYawOffset?: number;
  lookAt?: Point3d;
  fov?: number;
  style?: SphericalImageAnchorStyles;
};

interface SphericalImageAnchorStyles {
  normal?: SphericalImageAnchorStyle;
  highlighted?: SphericalImageAnchorStyle;
  viewModeNormal?: SphericalImageAnchorStyle;
  viewModeHighlighted?: SphericalImageAnchorStyle;
};

interface SphericalImageSetProps extends ViewerObjectProps {
  sphericalImages: SphericalImageProps[];
  styles?: SphericalImageAnchorStyles;
};
sphericalImageSets?: SphericalImageSetProps[];
```

## sphericalImageSetsFromUrl

The `sphericalImageSetsFromUrl` prop 

**Prop Definition**

```typescript
interface SphericalImageSetFromUrlExtendedProps
  extends Omit<SphericalImageSetExtendedProps, 'sphericalImages'> {
  url: string;
  requestHeader?: { [header: string]: string };
}

interface SphericalImageSetFromUrlProps
  extends Omit<
    SphericalImageSetFromUrlExtendedProps,
    'sphericalImages' | 'visibilityBox' | 'visibilityBoxSeq' | 'isSphericalViewMode'
  > {
  url: string;
  requestHeader?: { [header: string]: string };
};

sphericalImageSetsFromUrl?: SphericalImageSetFromUrlProps[];
```

## viewCube

The `viewCube` prop is used to manage the cube and compass on the screen. The compass depicts the direction of the 3D View.

![View Cube](/assets/viewcube.png)

**Prop Definition**

```typescript
interface ViewCubeCompassProps {
  ringColor: string;
  letterStyle: { color: string; fontSize: number; strokeColor: string; strokeWidth: number };
};

interface ViewCubeProps {
  cubeSize: number;
  fontSize: number;
  colors: {
    foreground: string;
    background: string;
    hoverForeground: string;
    hoverBackground: string;
  };
  position?: [x: number, y: number, z: number];
  compass: ViewCubeCompassProps;
};

viewCube?: ViewCubeProps | boolean;
```

## floorLevels

The `floorLevels` prop is used to draw floor grids on the 3D scans, and label each floor. 

**Prop Definition**

```typescript
interface FloorLevelStyle {
  color: number;
  opacity: number;
  lineWidth: number;
};

interface FloorLevelProps extends ViewerObjectProps {
  label?: Omit<TextLabelProps, 'position' | 'text'>;
  style: FloorLevelStyle;
  zLevel: number;
  gridCellSize: number;
  bboxPadding?: Parameters<THREE.Vector3['set']>;
  labelOffset?: Parameters<THREE.Vector3['set']>;
};

floorLevels?: FloorLevelProps[];
```

## measurementLines

The `measurementLines` prop 

**Prop Definition**

```typescript
interface MeasurementLineStyle {
  color: number;
  opacity: number;
  lineWidth: number;
  lineCap?: 'butt' | 'round' | 'square';
  lineJoin?: 'round' | 'bevel' | 'miter';
}

interface MeasurementLinesProps extends ViewerObjectProps {
  points?: THREE.Vector3[];
  style
};

measurementLines?: MeasurementLinesProps;
```

## northRotation

The `northRotation` prop

**Prop Definition**

```typescript
northRotation?: number;
```

## selectionColors

The `selectionColors` prop

**Prop Definition**

```typescript
selectionColors?: { shiftKeyColor: number; altKeyColor: number };
```

## sphericalViewerImageOpacity

The `sphericalViewerImageOpacity` prop

**Prop Definition**

```typescript
sphericalViewerImageOpacity?: number;
```

## sphereRadius

The `sphereRadius` prop

**Prop Definition**

```typescript
sphereRadius?: number;
```

## sphericalImageVisibilityRange

The `sphericalImageVisibilityRange` prop is used to increase the range of the visibility box to show surrounding area of the image as well.

**Prop Definition**

```typescript
sphericalImageVisibilityRange?: Parameters<THREE.Vector3['set']>;
```

## pointLights

The `pointLights` prop

**Prop Definition**

```typescript
interface PointLightProps {
  position: [x: number, y: number, z: number];
  intensity: number;
};

pointLights?: PointLightProps[];
```

## ambientLightIntensity

The `ambientLightIntensity` prop

**Prop Definition**

```typescript
ambientLightIntensity?: number;
```

## fileLoaderOptions

The `fileLoaderOptions` prop resets the camera positions to default once the 3D View is rendered.

**Prop Definition**

```typescript
fileLoaderOptions?: { withCredentials: boolean };
```

## polygons

The `polygons` prop

**Prop Definition**

```typescript
interface PolygonStyleSpec {
  normal?: PolygonStyleDetail;
  highlighted?: PolygonStyleDetail;
};

type PolygonClickEvent = {
  centerPoint: Point3d;
  polygonCoordinates: Point3d[];
};

interface PolygonProps extends ViewerObjectProps {
  styles?: PolygonStyleSpec;
  borderPoints: Point3d[];
  onClicked?: (event: PolygonClickEvent) => void;
};

polygons?: PolygonProps[];
```

## onAnnotationClick

The `onAnnotationClick` prop

**Prop Definition**

```typescript
onAnnotationClick?: (annotationId: string) => void;
```

## onMeshClick

The `onMeshClick` prop

**Prop Definition**

```typescript
interface PointCoordinates {
  x: number;
  y: number;
  z: number;
};

onMeshClick?: (point: PointCoordinates) => void;
```

## onPointCloudClick

The `onPointCloudClick` prop

**Prop Definition**

```typescript
interface PointPickResult {
  pointIndex: number;
  getPointAttributes: (
    pointIndex: number,
    attributeNames: string[]
  ) => Map<string, number | number[]>;
  mouseEvent: PointerEvent | MouseEvent;
};

onPointCloudClick?: (pointPickResult: PointPickResult) => void;
```

## onPointCloudSelection

The `onPointCloudSelection` prop

**Prop Definition**

```typescript
interface PointPickResult {
  pointIndex: number;
  getPointAttributes: (
    pointIndex: number,
    attributeNames: string[]
  ) => Map<string, number | number[]>;
  mouseEvent: PointerEvent | MouseEvent;
};

onPointCloudSelection?: (pointPickResults: PointPickResult[]) => void;
```

## onSphericalViewChanged

The `onSphericalViewChanged` prop

**Prop Definition**

```typescript
interface SphericalImageProps extends ViewerObjectProps {
  url: string;
  name: string;
  requestHeader?: { [header: string]: string };
  position: Parameters<THREE.Vector3['set']>;
  rotation: Parameters<THREE.Vector3['set']>;
  imageYawOffset?: number;
  lookAt?: Point3d;
  fov?: number;
  style?: SphericalImageAnchorStyles;
};

onSphericalViewChanged?: (sphericalImage: SphericalImageProps | undefined) => void;
```

## onSphericalViewClick

The `onSphericalViewClick` prop

**Prop Definition**

```typescript
interface TextureCoordinates {
  //  x and y should always be between 0 and 1, and represent the percentage of the width, resp.
  //  height, of the point where the image was clicked (so called because the image is being used as a
  //  texture on a sphere).
  x: number;
  y: number;
};

type SphericalImageViewerClickEvent = {
  textureCoordinates: TextureCoordinates;
  worldCoordinates: { x: number; y: number; z: number };
};

onSphericalViewClick?: (event: SphericalImageViewerClickEvent) => void;
```

## currentSpherical

The `currentSpherical` prop

**Prop Definition**

```typescript
interface SphericalImageAnchorStyle {
  color: THREE.Color;
  opacity: number;
  size: number;
  emissiveIntensity: number;
}

interface SphericalImageAnchorStyles {
  normal?: SphericalImageAnchorStyle;
  highlighted?: SphericalImageAnchorStyle;
  viewModeNormal?: SphericalImageAnchorStyle;
  viewModeHighlighted?: SphericalImageAnchorStyle;
};

interface SphericalImageProps extends ViewerObjectProps {
  url: string;
  name: string;
  requestHeader?: { [header: string]: string };
  position: Parameters<THREE.Vector3['set']>;
  rotation: Parameters<THREE.Vector3['set']>;
  imageYawOffset?: number;
  lookAt?: Point3d;
  fov?: number;
  style?: SphericalImageAnchorStyles;
};

currentSpherical?: SphericalImageProps;
```

## pickCanvasAreaPercent

The `pickCanvasAreaPercent` prop 

**Prop Definition**

```typescript
pickCanvasAreaPercent?: number;
```

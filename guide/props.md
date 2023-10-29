# Props

The Abyss 3D Viewer accepts a number of props to cater to a wide range of use cases. Following is a list of all the props that can be passed to the Abyss 3D Viewer component.

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

**Types**  
[LookAroundControlsProps](/guide/types/props-types.md#lookaroundcontrolsprops)

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

**Types**  
[VisibilityBoxMode](/guide/types/props-types.md#visibilityboxmode)

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

**Types**  
[VisibilityBoxProps](#visibilitybox)

**Prop Definition**

```typescript
setVisibilityBox?: (newBox: VisibilityBoxProps) => void;
```

## transformControls

The `transformControls` is used to transform objects in 3D space, but does not transform the scene's camera.

**Types**  
[TransformMode](/guide/types/props-types.md#transformmode)  
[TransformSpace](/guide/types/props-types.md#transformspace)

**Prop Definition**

```typescript
interface TransformControlsProps {
  isEnabled: boolean;
  mode: TransformMode;
  space: TransformSpace;
  size: number;
  target: string;
}

transformControls?: TransformControlsProps;
```

## brushTool

The `brushTool` prop - if enabled - can be used to select and brush over the selected points.

**Types**  
[BrushingEvent](/guide/types/props-types.md#brushingevent)

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

**Types**  
[MaterialProps](/guide/types/props-types.md#materialprops)  
[ViewerObjectProps](#viewerobjectprops)

**Prop Definition**

```typescript
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

**Types**  
[BillboardProps](/guide/components/billboard.md#props)  
[MarkerShapeType](/guide/types/props-types.md#markershapetype)  
[MarkerShapeStyle](/guide/types/props-types.md#markershapestyle)

**Prop Definition**

```typescript
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

**Types**  
[MarkerLineStyleProps](/guide/types/props-types.md#markerlinestyleprops)  
[MarkerSphereStyleProps](/guide/types/props-types.md#markerspherestyleprops)

**Prop Definition**

```typescript
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

**Types**  
[BoundingBox](/guide/types/utils-types.md#boundingbox)  
[SegmentVariants](/guide/types/props-types.md#segmentvariants)

**Prop Definition**

```typescript
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

**Types**  
[DataFormat](/guide/types/props-types.md#dataformat)

**Prop Definition**

```typescript
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

**Types**  
[ViewerObjectProps](/guide/types/props-types.md#viewerobjectprops)

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

The `pointBudget` prop is used to control the number of points to be rendered in the 3D View at a time.

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

**Types**  
[SphericalImageProps](/guide/types/props-types.md#sphericalimagesets)  
[SphericalImageAnchorStyles](/guide/types/props-types.md#sphericalimageanchorstyles)  
[ViewerObjectProps](/guide/types/props-types.md#viewerobjectprops)

**Prop Definition**

```typescript
interface SphericalImageSetProps extends ViewerObjectProps {
  sphericalImages: SphericalImageProps[];
  styles?: SphericalImageAnchorStyles;
};
sphericalImageSets?: SphericalImageSetProps[];
```

## sphericalImageSetsFromUrl

The `sphericalImageSetsFromUrl` prop

**Types**  
[SphericalImageSetFromUrlExtendedProps](/guide/types/props-types.md#sphericalimagesetfromurlextendedprops)

**Prop Definition**

```typescript
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

**Types**  
[ViewCubeCompassProps](/guide/types/props-types.md#viewcubecompassprops)

**Prop Definition**

```typescript
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

**Types**  
[TextLabelProps](/guide/types/props-types.md#textlabelprops)  
[FloorLevelStyle](/guide/types/props-types.md#floorlevelstyle)

**Prop Definition**

```typescript
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

**Types**  
[ViewerObjectProps](/guide/types/props-types.md#viewerobjectprops)  
[MeasurementLineStyle](/guide/types/props-types.md#measurementlinestyle)

**Prop Definition**

```typescript
interface MeasurementLinesProps extends ViewerObjectProps {
  points?: THREE.Vector3[];
  styles?: MeasurementLineStyle;
  setLineDistance?: (distance: number) => void;
}

measurementLines?: MeasurementLinesProps;
```

## northRotation

The `northRotation` prop is used to set the camera view and the view cube to the north direction.

**Prop Definition**

```typescript
northRotation?: number;
```

## selectionColors

The `selectionColors` prop is used to set the colors of the selected points when the shift or alt key is pressed.

**Prop Definition**

```typescript
selectionColors?: { shiftKeyColor: number; altKeyColor: number };
```

## sphericalViewerImageOpacity

The `sphericalViewerImageOpacity` prop is used to set the opacity of the layer of the spherical image in the mesh material. The default value is 1.

**Prop Definition**

```typescript
sphericalViewerImageOpacity?: number;
```

## sphereRadius

The `sphereRadius` prop is used to set the radius of the sphere in the 3D View on which the spherical images are rendered. The default value is 10.

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

The `pointLights` prop is used to set the position and intensity of the point lights in the scene.

**Prop Definition**

```typescript
interface PointLightProps {
  position: [x: number, y: number, z: number];
  intensity: number;
};

pointLights?: PointLightProps[];
```

## ambientLightIntensity

The `ambientLightIntensity` prop is used to set the intensity of the ambient light in the scene.

**Prop Definition**

```typescript
ambientLightIntensity?: number;
```

## fileLoaderOptions

The `fileLoaderOptions` prop

**Prop Definition**

```typescript
fileLoaderOptions?: { withCredentials: boolean };
```

## polygons

The `polygons` prop are shapes that are drawn on the 3D View. These shapes can be used to identify locations of the ponis of interest, etc.

**Types:**  
[ViewerObjectProps](/guide/types/props-types.md#viewerobjectprops)  
[PolygonStyleSpec](/guide/types/props-types.md#polygonstylespec)  
[Point3d](/guide/types/utils-types.md#point3d)  
[PolygonClickEvent](/guide/types/props-types.md#polygonclickevent)

**Prop Definition**

```typescript
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

The `onPointCloudClick` prop handles the click on the point cloud.

**Types**  
[PointPickResult](/guide/types/props-types.md#pointpickresult)

**Prop Definition**

```typescript
onPointCloudClick?: (pointPickResult: PointPickResult) => void;
```

## onPointCloudSelection

The `onPointCloudSelection` prop sets the clicked point cloud in onPointCloudClick as selected.

**Types**  
[PointPickResult](/guide/types/props-types.md#pointpickresult)

**Prop Definition**

```typescript
onPointCloudSelection?: (pointPickResults: PointPickResult[]) => void;
```

## onSphericalViewChanged

The `onSphericalViewChanged` prop set the selected spherical image as the currentSpherical or sets it to undefined when Esc key is pressed.

**Types**  
[SphericalImageProps](/guide/types/props-types.md#sphericalimageprops)

**Prop Definition**

```typescript
onSphericalViewChanged?: (sphericalImage: SphericalImageProps | undefined) => void;
```

## onSphericalViewClick

The `onSphericalViewClick` prop sets the clicked spherical textures and coordiantes of the currentSpherical.

**Types**  
[TextureCoordinates](/guide/types/props-types.md#texturecoordinates)

**Prop Definition**

```typescript
type SphericalImageViewerClickEvent = {
  textureCoordinates: TextureCoordinates;
  worldCoordinates: { x: number; y: number; z: number };
};

onSphericalViewClick?: (event: SphericalImageViewerClickEvent) => void;
```

## currentSpherical

The `currentSpherical` prop is used to show the selected spherical image from the sphericalImageSets in 3D view.

**Types**  
[SphericalImageProps](/guide/types/props-types.md#sphericalimageprops)

**Prop Definition**

```typescript
currentSpherical?: SphericalImageProps;
```

## pickCanvasAreaPercent (need to double check)

The `pickCanvasAreaPercent` prop is used to set the area of the canvas in percentage. The default value is 5.

**Prop Definition**

```typescript
pickCanvasAreaPercent?: number;
```

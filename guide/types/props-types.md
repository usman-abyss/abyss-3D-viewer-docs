# Types

### LookAroundControlsProps

```typescript
interface LookAroundControlsProps {
  hspeed?: number;
  vspeed?: number;
  zoomStep?: number;
  minFov?: number;
  maxFov?: number;
}
```

### VisibilityBoxMode

```typescript
enum VisibilityBoxMode {
  Disabled,
  Enabled,
  Adjusting,
}
```

### TransformMode

```typescript
enum TransformMode {
  Translate,
  Rotate,
  Scale,
}
```

### TransformSpace

```typescript
enum TransformSpace {
  Local,
  World,
}
```

### BrushingEvent

[PointPickResult](#pointpickresult)

```typescript
interface BrushingEvent {
  brushedPoints: PointPickResult[];
}
```

### PointPickResult

```typescript
interface PointPickResult {
  pointIndex: number;
  getPointAttributes: (
    pointIndex: number,
    attributeNames: string[]
  ) => Map<string, number | number[]>;
  mouseEvent: PointerEvent | MouseEvent;
}
```

### ViewerObjectProps

```typescript
interface ViewerObjectProps {
  id?: string;
  name: string;
  isVisible?: boolean;
  visibilityGroup?: string;
}
```

### Side

```typescript
enum Side {
  FrontSide = THREE.FrontSide,
  BackSide = THREE.BackSide,
  DoubleSide = THREE.DoubleSide,
}
```

### MaterialProps

[Side](#side)

```typescript
interface MaterialProps {
  color?: string;
  transparent?: boolean;
  opacity?: number;
  side?: Side;
}
```

### MarkerShapeType

```typescript
enum MarkerShapeType {
  SPHERE = 0,
  CYLINDER = 1,
  FLAG = 2,
}
```

### MarkerShapeStyle

```typescript
interface MarkerShapeStyle {
  color: string | THREE.Color;
  opacity: number;
  size: number;
}
```

### MarkerLineStyleProps

```typescript
interface MarkerLineStyleProps {
  color: number | string | THREE.Color;
  lineWidth: number;
  dashed: boolean;
}
```

### MarkerSphereStyleProps

```typescript
interface MarkerSphereStyleProps {
  color: number | string | THREE.Color;
  opacity?: number;
  size?: number;
  emissiveIntensity?: number;
}
```

### SegmentVariants

```typescript
enum SegmentVariants {
  LinesAndWireframeMesh,
  LinesAndTransparentMesh,
  LinesOnly,
}
```

### Field

```typescript
interface Field {
  name: string;
  type?: string;
  offset: number;
  size?: number;
  maxId?: number;
}
```

### DataFormat

[Field](#field)

```typescript
interface DataFormat {
  recordSize: number;
  fields: Field[];
}
```

### SphericalImageAnchorStyle

```typescript
interface SphericalImageAnchorStyle {
  color: THREE.Color;
  opacity: number;
  size: number;
  emissiveIntensity: number;
}
```

### SphericalImageAnchorStyles

[SphericalImageAnchorStyle](#sphericalimageanchorstyle)

```typescript
interface SphericalImageAnchorStyles {
  normal?: SphericalImageAnchorStyle;
  highlighted?: SphericalImageAnchorStyle;
  viewModeNormal?: SphericalImageAnchorStyle;
  viewModeHighlighted?: SphericalImageAnchorStyle;
}
```

### SphericalImageProps

[ViwewrObjectProps](#viewerobjectprops)  
[SphericalImageAnchorStyles](#sphericalimageanchorstyles)  
[Point3d](/guide/types/props-types.md#point3d)

```typescript
interface SphericalImageProps extends ViewerObjectProps {
  url: string;
  name: string;
  requestHeader?: { [header: string]: string };
  position: Parameters<THREE.Vector3["set"]>;
  rotation: Parameters<THREE.Vector3["set"]>;
  imageYawOffset?: number;
  lookAt?: Point3d;
  fov?: number;
  style?: SphericalImageAnchorStyles;
}
```

### SphericalImageSetExtendedProps

[SphericalImageProps](#sphericalimageprops)  
[SphericalImageSetProps](props.md#sphericalimagesets)

```typescript
interface SphericalImageSetExtendedProps extends SphericalImageSetProps {
  visibilityBox: THREE.Box3;
  visibilityBoxSeq: number;
  isSphericalViewMode: boolean;
  onSphericalViewChanged?: (
    sphericalImage: SphericalImageProps | undefined
  ) => void;
}
```

### SphericalImageSetFromUrlExtendedProps

[SphericalImageSetExtendedProps](#sphericalimagesetextendedprops)

```typescript
interface SphericalImageSetFromUrlExtendedProps
  extends Omit<SphericalImageSetExtendedProps, "sphericalImages"> {
  url: string;
  requestHeader?: { [header: string]: string };
}
```

### ViewCubeCompassProps

```typescript
interface ViewCubeCompassProps {
  ringColor: string;
  letterStyle: {
    color: string;
    fontSize: number;
    strokeColor: string;
    strokeWidth: number;
  };
}
```

### TextLabelProps

```typescript
interface TextLabelProps {
  position: Parameters<THREE.Vector3["set"]>;
  text: string;
  color: string;
  fontSize: number;
  font?: string;
  fillOpacity?: number;
  strokeWidth?: number;
  strokeColor?: number;
  strokeOpacity?: number;
}
```

### FloorLevelStyle

```typescript
interface FloorLevelStyle {
  color: number;
  opacity: number;
  lineWidth: number;
}
```

### MeasurementLineStyle

```typescript
interface MeasurementLineStyle {
  color: number;
  opacity: number;
  lineWidth: number;
  lineCap?: "butt" | "round" | "square";
  lineJoin?: "round" | "bevel" | "miter";
}
```

### PolygonStyleDetail

```typescript
interface PolygonStyleDetail {
  color: THREE.Color;
  opacity: number;
  size: number;
  emissiveIntensity: number;
}
```

### PolygonStyleSpec

[PolygonStyleDetail](#polygonstyledetail)

```typescript
interface PolygonStyleSpec {
  normal?: PolygonStyleDetail;
  highlighted?: PolygonStyleDetail;
}
```

### PolygonClickEvent

[Point3d](/guide/types/props-types.md#point3d)

```typescript
type PolygonClickEvent = {
  centerPoint: Point3d;
  polygonCoordinates: Point3d[];
};
```

### TextureCoordinates

```typescript
interface TextureCoordinates {
  //  x and y should always be between 0 and 1, and represent the percentage of the width, resp.
  //  height, of the point where the image was clicked (so called because the image is being used as a
  //  texture on a sphere).
  x: number;
  y: number;
}
```

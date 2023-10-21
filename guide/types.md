# Types

## Vector3

The `Vector3` type is a representation of a 3D vector with components for the X, Y, and Z coordinates. It is commonly used in 3D graphics and mathematics to describe points or directions in 3D space.

**Type Definition**

```typescript
type Vector3 = [x: number, y: number, z: number];
```

## BoundingBox

The `BoundingBox` type is used to represent a rectangular region in 3D space, defined by a minimum and maximum set of coordinates along the X, Y, and Z axes. This type is used to define bounds of a structure like a pipe, flange or valve.

**Type Definition**

```typescript
type BoundingBox = {
  min: Vector3; // The minimum coordinates (X, Y, Z) of the box.
  max: Vector3; // The maximum coordinates (X, Y, Z) of the box.
};
```

## Matrix4

The `Matrix4` type represents a 4x4 matrix commonly used in 3D computer graphics and mathematics to perform various transformations, such as rotations, translations, scaling, and perspective projections. It consists of 16 components arranged in a 4x4 grid.

**Type Definition**

```typescript
type Matrix4 = [
  m0: number,
  m1: number,
  m2: number,
  m3: number,
  m4: number,
  m5: number,
  m6: number,
  m7: number,
  m8: number,
  m9: number,
  m10: number,
  m11: number,
  m12: number,
  m13: number,
  m14: number,
  m15: number
];
```

## Field

The `Field` type is a fundamental component for parsing and managing structured binary data. It defines the characteristics of individual data fields, including their name, data type, offset, size, and, when applicable, the maximum ID value. These properties are instrumental for data parsing, serialization, and modeling tasks.

`Field` definitions are utilized to parse binary data representing 3D point cloud attributes, such as 'x,' 'y,' 'z,' 'r,' 'g,' 'b,' and 'scan.' These definitions specify the data type, offset (measured in bytes), and size of each field within the binary data structure. The `Field` type plays a pivotal role in extracting and transforming data fields, enabling the conversion of binary data into usable data structures. Custom field types, including 'ub' (unsigned byte), 'f' (float), 'ui' (unsigned integer), and 'i' (integer), can be tailored to match the specific data types used in your binary format, making it a versatile tool for data manipulation.

## Point2d

The `Point2d` type represents a two-dimensional point in a Cartesian coordinate system. It is defined by its `x` and `y` coordinates, which are both numeric values. `Point2d` is often used to represent positions, locations, or coordinates on a two-dimensional plane.

**Type Definition**

```typescript
type Point2d = {
  x: number; // The X-coordinate of the point.
  y: number; // The Y-coordinate of the point.
};
```

## Point3d

The Point3d type represents a three-dimensional point in a Cartesian coordinate system. It is defined by its x, y, and z coordinates, which are all numeric values. Point3d is used to represent positions, locations, or coordinates in a three-dimensional space.

**Type Definition**

```typescript
type Point3d = {
  x: number; // The X-coordinate of the point.
  y: number; // The Y-coordinate of the point.
  z: number; // The Z-coordinate of the point.
};
```

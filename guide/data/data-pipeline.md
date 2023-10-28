# Data Pipeline Documentation

## Introduction

The Data Pipeline is a data processing pipeline designed to prepare 3D point cloud data acquired from various sensors, such as LiDAR, for visualization in a 3D space. This pipeline involves several stages, including data processing, format conversion, and network transmission, to optimize the data for efficient storage and rendering.

## Data Format

The input data for the Data Pipeline consists of 3D point cloud information in the following CSV format:

```csv
x,y,z,r,g,b
0.00,1.00,2.00,255,0,0
0.00,1.00,2.00,245,245,245
0.00,1.00,2.00,0,0,255
0.00,1.00,2.00,0,255,0
0.00,1.00,2.00,255,255,0
0.00,1.00,2.00,255,0,255
```

The CSV file contains the following columns:

- `x`: The x-coordinate of the point in 3D space.
- `y`: The y-coordinate of the point in 3D space.
- `z`: The z-coordinate of the point in 3D space.
- `r`: The red color component of the point.
- `g`: The green color component of the point.
- `b`: The blue color component of the point.

## Data Processing

### CSV to Binary Encoding

The initial step in the data pipeline involves processing the CSV data into a more compact binary format. This encoding step is performed for two primary reasons:

1. **File Size Reduction**: The binary format results in significantly smaller file sizes compared to the original CSV format. This is crucial when dealing with a large quantity of files, as it helps save both time and storage space.

2. **Network Efficiency**: Transmitting binary files over a network is more efficient, as it reduces the amount of data transferred, leading to faster transmission times.

The encoding process converts the CSV data into binary files while preserving all the original data attributes. These binary files are encoded in a format that is optimized for quick decoding and 3D rendering.

## Data Decoding and Visualization

Upon arrival at the destination, the binary files are decoded into JSON format to retrieve the original 3D point cloud data. The data decoding process includes the following steps:

1. **Binary to JSON Decoding**: The binary files are decoded into JSON format, recreating the original data structure.

2. **3D Visualization**: The decoded JSON data is then utilized for 3D visualization in a suitable viewer. In this viewer, the x, y, and z coordinates are used to position the points in 3D space, while the color attributes (r, g, b) are employed to render the points with their respective colors. The "corrosion_cat" attribute may be used to apply different visual representations or classifications to the points based on their corrosion level.

## Bin File Downloading Order

All of the bin files are not downloaded at once. Instead, they are downloaded in a specific order to ensure that the most important point cloud sections are visualised first. Learn more about the bin file downloading order [here](/guide/data/octree-heirarchy.md).

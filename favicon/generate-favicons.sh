#!/bin/bash

# Create favicon directory if it doesn't exist
mkdir -p favicon

# Convert SVG to different PNG sizes
magick favicon.svg -resize 16x16 favicon-16x16-blue.png
magick favicon.svg -resize 32x32 favicon-32x32-blue.png
magick favicon.svg -resize 180x180 apple-touch-icon-blue.png

# Create ICO file
magick favicon.svg -define icon:auto-resize=16,32,48,64 favicon.ico 
#!/bin/bash
# Script to download all images from old Monmet website
# Run this from Git Bash on Windows

cd "$(dirname "$0")"

echo "Creating old_site_images folder..."
mkdir -p old_site_images

echo "Downloading images from old website..."
echo "This may take a few minutes..."

wget \
  --recursive \
  --level=2 \
  --page-requisites \
  --no-parent \
  --accept=jpg,jpeg,png,gif,svg,webp,ico \
  --adjust-extension \
  --convert-links \
  --domains=www.monmettech.com,monmettech.com \
  --directory-prefix=old_site_images \
  --input-file=old_site_urls.txt \
  --no-clobber \
  --wait=0.5

echo ""
echo "Download complete!"
echo "Images are in: old_site_images/"
echo ""
echo "To organize these images, you can run:"
echo "  find old_site_images -type f \\( -name '*.jpg' -o -name '*.png' -o -name '*.gif' \\) -exec cp {} old_site_images/all_images/ \\;"

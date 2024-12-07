#!/bin/bash

# Get version from manifest.json
version=$(grep '"version":' manifest.json | cut -d'"' -f4)

if [ -z "$version" ]; then
    echo "Error: Could not get version from manifest.json"
    exit 1
fi

# Git operations
git add .
git commit -m "Release version $version"
git tag "$version"
git push origin main
git push origin "$version"

echo "Successfully released version $version and pushed changes"

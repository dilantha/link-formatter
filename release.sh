#!/bin/bash

# Check if version is provided
if [ -z "$1" ]; then
    echo "Please provide version number"
    exit 1
fi

version=$1

# Git operations
git add .
git commit -m "Release version $version"
git tag "v$version"
git push origin main
git push origin "v$version"

echo "Successfully released version $version and pushed changes"

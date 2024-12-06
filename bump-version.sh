#!/bin/bash

# Check if version type is provided
if [ -z "$1" ]; then
    echo "Please provide version type: major, minor, or patch"
    exit 1
fi

# Function to increment version
increment_version() {
    local version=$1
    local type=$2
    
    IFS='.' read -ra parts <<< "$version"
    local major=${parts[0]}
    local minor=${parts[1]}
    local patch=${parts[2]}
    
    case $type in
        "major")
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        "minor")
            minor=$((minor + 1))
            patch=0
            ;;
        "patch")
            patch=$((patch + 1))
            ;;
        *)
            echo "Invalid version type. Use: major, minor, or patch"
            exit 1
            ;;
    esac
    
    echo "$major.$minor.$patch"
}

# Read current version from package.json
current_version=$(grep '"version":' package.json | cut -d'"' -f4)

# Calculate new version
new_version=$(increment_version "$current_version" "$1")

# Update package.json
sed -i '' "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" package.json

# Update manifest.json
sed -i '' "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" manifest.json

echo "$new_version"

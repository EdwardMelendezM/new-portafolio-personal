#!/bin/bash

# Get the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Validate the current branch
if [ "$current_branch" != "develop" ] && [ "$current_branch" != "main" ]; then
    echo "Error: Este script solo debe ejecutarse en las ramas 'develop' o 'main'. Rama: $current_branch"
    exit 1
fi

# Get the latest tag
latest_tag=$(git describe --tags $(git rev-list --tags --max-count=1) | sed 's/v//g')
echo "Last tag"
echo "v$latest_tag"
ehco "New tag"

# If there are no tags, set the next version to v1.0.0
if [ -z "$latest_tag" ]; then
    next_version="v1.0.0"
else
    # Get the major, minor, and patch versions
    major=$(echo $latest_tag | cut -d. -f1)
    minor=$(echo $latest_tag | cut -d. -f2)
    patch=$(echo $latest_tag | cut -d. -f3)
    # Increment the version based on the current branch DEVELOP
    if [ "$current_branch" = "develop" ]; then
        minor=$((minor + 1))
        patch=0
    fi

    # Increment the version based on the current branch MAIN
    if [ "$current_branch" = "main" ]; then
        major=$((major + 1))
        minor=0
        patch=0
    fi

    # Set the next version
    next_version="v$major.$minor.$patch"

fi

# Output the next version
echo "$next_version"

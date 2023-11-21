#!/bin/bash


# Build the project (replace the build command with your specific build command)
npm run build

echo "build complete. Deploying now"

npm run deploy

echo "deploy complete"
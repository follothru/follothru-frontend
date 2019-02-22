#!/bin/bash
echo "------"
echo "Building & deploying app..."
ng build --base-href https://follothru.github.io/follothru-frontend/

cd ./dist/follothru-frontend
cp ./index.html ./404.html
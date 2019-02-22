#!/bin/bash
./validate-style.sh

echo "------"
echo "Building app..."
ng build --base-href https://follothru.github.io/follothru-frontend/

cd ./dist/follothru-frontend
cp ./index.html ./404.html
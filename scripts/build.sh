#!/bin/bash
./validate-style.sh

echo "Building app..."
yarn build --base-href https://follothru.github.io/follothru-frontend/

cd ./dist/follothru-frontend
cp ./index.html ./404.html
#!/bin/bash
echo "------"
echo "Building & deploying app..."
ng build --prod --base-href https://follothru.github.io/follothru-frontend

ls
cd ./dist/follothru-frontend
cp ./index.html ./404.html

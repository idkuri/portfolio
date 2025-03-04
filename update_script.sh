#!/bin/bash

cd "C:\Users\Kuri\Desktop\Portfolio\portfolio"
npm run build
git fetch --recurse-submodules
git submodule update --remote
cp -R -Force build/* idkuri.github.io/
cd idkuri.github.io
git add --all
git commit -m "Updated Files with bash script"
git push origin head:main
cd ..
git add --all
git commit -m "update submodule"
git push
read "Hi"
echo "Script execution completed!"

#!/bin/bash

cd "C:\Users\Kuri\Desktop\Portfolio\portfolio"
npm run build
git fetch --recurse-submodules
git submodule update --remote
cp -R build/* idkuri.github.io/
cd idkuri.github.io
git add --all
git commit -m "Updated Files with bash script"
git push origin
cd ..
read "Hi"
echo "Script execution completed!"

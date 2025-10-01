#!/bin/bash

cd "C:\Users\Kuri\Desktop\Portfolio\portfolio"
echo "Updating Submodules"
git fetch --recurse-submodules
git submodule update --remote
echo "Copying Files"
cp -Rf build/* idkuri.github.io/
cd idkuri.github.io
echo "Committing Changes"
git add --all
git commit -m "Updated Files with bash script"
git push origin head:main
echo "Changes Pushed"
cd ..
git add --all
git commit -m "update submodule"
git push
echo "Script execution completed!"

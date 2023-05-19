#!/bin/bash

cd "C:\Users\Kuri\Desktop\Portfolio"
npm run build
cp -R build/* idkuri.github.io/
cd idkuri.github.io
git add --all
git commit -m "Updated Files with bash script"
git push origin
cd ..
echo "Script execution completed!"

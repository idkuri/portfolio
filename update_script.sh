#!/bin/bash

<<<<<<< Updated upstream
cd "C:\Users\Kuri\Desktop\Portfolio"
=======
cd "C:\Users\Kuri\Desktop\Portfolio\portfolio"
# Step 1: Run npm run build
>>>>>>> Stashed changes
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

#!/bin/bash

cd "C:\Users\Kuri\Desktop\Portfolio"
# Step 1: Run npm run build
npm run build

# Step 2: Copy files using robocopy (Windows)
cp -R build/* idkuri.github.io/

# Step 3: Enter the submodule directory
cd idkuri.github.io

# Step 4: Stage all changes in the submodule
git add --all

# Step 5: Commit the changes with a specified message
git commit -m "Updated Files with bash script"

# Step 6: Push the changes to the remote repository
git push origin

# Step 7: Go back to the main repository's root directory
cd ..

echo "Script execution completed!"

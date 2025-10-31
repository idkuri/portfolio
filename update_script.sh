#!/bin/bash

BUILD=false
TRACKED=false

# Parse arguments
for arg in "$@"; do
	case $arg in
		--build)
			BUILD=true
			;;
		--tracked)
			TRACKED=true
			;;
	esac
done

if $BUILD; then
	echo "Running build..."
	bun i
	bun run build
fi

cd "C:\Users\Kuri\Desktop\Portfolio\portfolio"

echo "Updating Submodules"
git fetch --recurse-submodules
git submodule update --remote

echo "Copying Files"
cp -Rf build/* idkuri.github.io/
cd idkuri.github.io

echo "Committing Changes"
if $TRACKED; then
	echo "Adding only tracked files"
	git add -u
else
	echo "Adding all files"
	git add --all
fi

git commit -m "Updated Files with bash script"
git push origin head:main
echo "Changes Pushed"

cd ..

if $TRACKED; then
	echo "Adding only tracked files"
	git add -u
else
	echo "Adding all files"
	git add --all
fi

git commit -m "update submodule"
git push

echo "Script execution completed!"

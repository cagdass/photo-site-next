#!/bin/bash

# Go to the directory with your files

# Step 1: Rename all files to a temp name to avoid clashes
i=0
for file in misc-*.jpg; do
  mv "$file" "temp-$i.jpg"
  ((i++))
done

# Step 2: Shuffle and rename back to misc-XX.jpg
files=(temp-*.jpg)
shuf_indexes=$(shuf -i 1-${#files[@]})

i=1
for idx in $shuf_indexes; do
  newname=$(printf "misc-%02d.jpg" "$i")
  mv "temp-$((idx-1)).jpg" "$newname"
  ((i++))
done

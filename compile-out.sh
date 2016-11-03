#!/bin/bash
# get "compiled" file
for i in *.php; do
  curl http://borgoromito.local/$i > out/`basename $i php`html
done
# change file extension in anchor tags
for i in out/*.html; do
  sed -i ".bak"  "s/\.php/\.html/g" $i
done;
mv out/*.bak out/bck/
cp -r css out/
lessc css/styles.less > css/styles.css
cp -r fonts out/
cp -r images out/
cp -r js out/
cp -r files out

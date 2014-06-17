#!/bin/bash
curl http://borgoromito.local/index.php > out/index.html
cp -r css out/
lessc css/styles.less > css/styles.css
cp -r fonts out/
cp -r images out/
cp -r js out/

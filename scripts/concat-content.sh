#!/usr/bin/env bash
cd $(git rev-parse --show-toplevel)
rm resources/unpacked/compiled/content_script/thesis.js
cp scripts/react/react* resources/unpacked/compiled/content_script/
./scripts/closure-build/closurebuilder.py "resources/unpacked/compiled/content_script/cljs_deps.js" --namespace "thesis.content_script" --root="resources/unpacked/compiled/content_script" -o script > resources/unpacked/compiled/content_script/thesis.js
#rm thesis.js
#gfind . -name "*.js" -printf "%T@ %p\n" | sort -nr | awk -F" " '{print $2}' | while read fn; do cat "$fn" >> thesis.js && echo "" >> thesis.js; done
#echo "concatted all"

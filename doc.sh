#!bin/env bash
yarn doc
git checkout ph-pages
mv -f docs/* ./
git add .
git commit -m 'update'
git push
git checkout main
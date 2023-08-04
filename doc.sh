#!bin/env bash
yarn doc
git checkout ph-pages
mv -f doc/* ./
git add .
git commit -m 'update'
git push
git checkout main
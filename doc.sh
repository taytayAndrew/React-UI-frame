#!bin/env bash
yarn doc
git checkout gh-pages
git add .
git commit -m 'update'
git push
git checkout main
set -e

npm run build 

git add -A
git commit -m "deploy"

git push -u origin main
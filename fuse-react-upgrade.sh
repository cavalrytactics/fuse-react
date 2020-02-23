git remote rm origin
git remote add origin  https://github.com/withinpixels/fuse-react.git

git checkout master
git branch -m master-holder

git fetch
git checkout master
git pull origin master

git merge master-holder --allow-unrelated-histories
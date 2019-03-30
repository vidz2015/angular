read me


I assume you started to work in a directory and didn't use git there. The following should work with git bash:

cd "path to your repo"
git init
git add . # if you want to commit everything. Otherwise use .gitconfig files
git commit -m "initial commit" # If you change anything, you can add and commit again...
To add a remote, just do

git remote add origin https://...
git remote show origin # if everything is ok, you will see your remote
git push -u origin master # assuming your are on the master branch.
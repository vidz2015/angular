
Yeah, simple - git --version (holds true for most applications)

If you get -bash: git: command not found when you run git --version it means git is not installed or it is not on PATH.

Make sure git is installed.

Git is usually installed at /usr/local/git/
Make sure there is a binary file where you installed git. If not, install git.
If git is installed, then it is mostly likely not on PATH

Find the path where you installed it and do something like this to add it to the path and set in your profile:

echo 'export PATH=/usr/local/git/bin:$PATH' >> ~/.profile

Then make sure you restart terminal before trying to run any git commands
________________________________________________________________________________
________________________________________________________________________________
I assume you started to work in a directory and didn't use git there. The following should work with git bash:

cd "path to your repo"
git init
git add . # if you want to commit everything. Otherwise use .gitconfig files
git commit -m "initial commit" # If you change anything, you can add and commit again...
To add a remote, just do

git remote add origin https://...
git remote show origin # if everything is ok, you will see your remote
git push -u origin master # assuming your are on the master branch.
________________________________________________________________________________
________________________________________________________________________________
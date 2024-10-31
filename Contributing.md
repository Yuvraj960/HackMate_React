<!-- Make a effecient .md file to tell the contributors how to contribute in the project. Please mention one point specially that while commiting please delete the 'node-modules' folder as it is a react app project -->

# Contributing to the project

## How to contribute to the project

### Step 1: Fork the repository

Fork the repository by clicking on the fork button on the top of the page. This will create a copy of this repository in your account.

### Step 2: Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

Open a terminal and run the following git command:

```bash

git clone "url you just copied"

```

### Step 3: Create a branch

Change to the repository directory on your computer (if you are not already there):

```bash

cd "name of the repository"

```

Now create a branch using the git checkout command:

```bash

git checkout -b your-new-branch-name

```

For example:

```bash

git checkout -b your-name

```

### Step 4: Make changes and commit

(Note: Please delete the 'node-modules' folder before commiting, It is to be deleted everytime while commiting)

Make the changes you want in the repository. Add those changes to the branch you just created using the git add command:

```bash

git add .

```

Now commit those changes using the git commit command:

```bash

git commit -m "Your commit message"

```

### Step 5: Push changes to GitHub

Push your changes using the command git push:

```bash

git push origin <add-your-branch-name>

```

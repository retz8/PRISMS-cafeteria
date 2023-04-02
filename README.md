# PRISMS-cafeteria

By AI and React, count the number of people eating each meal and provide data analysis for PRISMS kitchen staff

## GitHub Repo Rule

1. **main** branch: Locked. You neither can push nor pull. This branch will be the final codes.
2. **dev** branch: All of the dev works will be combined here.
   You can pull updated code & send Pull Request from your task branch. Don't directly send Pull Request from your own branch.
3. **your task** branch: You will work on this branch with other members who are working on the same task. You will send Pull Request from this branch to "dev" branch when you are done with the task.

  "your task" branches: runningAI, algorithm, sendData

4. **your own** branch: You will mainly work on this branch and merge it to your task branch

## Getting Started
**This guide is based on VS Code**, but you can do the same thing (you may need to do your own research) with other IDE such as IntelliJ and PyCharm

### 1. Open Terminal and go to the folder that you want to work with

### 2. Clone GitHub Repository (Make sure to install git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git )

    git clone https://github.com/retz8/PRISMS-house-events-app.git

### 3. Open VS Code 

    cd PRISMS-cafeteria
    code .

### 4. Open "dev" Branch & Your Own Branch

First, open "dev" branch

    git switch dev
    git pull origin dev
    
Third, open "your task" branch

    git switch <your task name>
    git pull origin <your task name>

Third, open "your own" branch and merge "your task" branch

    git switch <your first name>
    git merge <your task name> --allow-unrelated-histories
    git add .
    git commit -m "first commit"
    git push -u origin <your first name>

### 5. Wow, you are ready to work on the project!

### TO RUN THE CODE [ONLY for BACKEND, not APP]
1. Make sure that you have Python installed
2. Make sure that you have pip installed 
3. Install necessary dependencies on Python code. (ex) opencv-python, torch)
4. run following command to run file

    python <the file name you want to run, make sure to add .py at the end>


## WorkFlow

You will follow this work flow during club time (or whenver you want to work with)

### 1. Open your project folder in VS Code

### 2. Open dev branch and fetch updated code. Check update on dev branch regularly

    git switch dev
    git pull origin dev

### 3. Open your own branch or your task branch

    git switch <your first name>
    git switch <your task name>

### 4. Update code on your own branch or your task branch

### 4.5 Update your task branch with your own branch

    git switch <your task name>
    git merge <your first name>
    git add .
    git commit -m "<your first name> merged to <your task name>"
    git push -u origin <your task name>

### 5. When you think your task is done or need code review, push your work

    git switch <your task name>
    git add .
    git commit -m "<commit message, please write it clearly>"
    git push -u origin <your first name>

### 6. To send Pull Request to dev branch from your task branch, Visit the repository on GitHub in your web browser and navigate your own branch.

1. Click the "New Pull Request" button on the page. This will take you to the "Open a pull request" page.

2. Select the **dev** branch as the base branch and **your own** branch as the compare branch.

3. Review the changes that will be included in the pull request and add a description if necessary.

4. Once you are satisfied with the pull request, click the "Create pull request" button to submit it.

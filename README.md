# Phase 0 - SetUp (main + feature branch merged)

## Day 2: Intallation of Node, nvm, npm and shell config

```
Node version: 24.19.0
npm version : 11.17.0
npm version: 0.40.0
```

VS code style and sintax extension configuration via VScode preferences
prettier and Eslint
Aliases en el /.zshrc file.

## Day 3: Understanding git workflow

Understanding that in git, we have 3 espaces: the working directoty, the staging area, and the commit, where you fix your progress.

## PROJECT OVERVIEW

This repository is the workshop place to the learnings on how to get a good programming language and integration of other applications under the umbrella of a bootcamp.

## The inspection-log

Practical exercise on how to get familiar with the git environment.
Creating repos, adding and committing to then push them to the GitHub platform.

Objectives:

1. Creating the repository folder
2. Intialiting git
3. verifying git status
4. adding the folder
5. committing the folder
6. pushing it to the github repo

STEPS:

```
mkdir inspection-log
git init
git status
git add inspection-log
git commit -m "Add inspection-log"
gh repo create bootcamp --public --source=. --remote=origin --push
```

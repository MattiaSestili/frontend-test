# Paradime frontend test

Welcome to the paradime frontend technical challenge.
In this challenge you will be building the application logic for a basic code editor app.

We have already bootstrapped this project with [Create React App](https://github.com/facebook/create-react-app).


## Setup
### Installation

Installs all the project dependencies and node modules.
You will need Node v15+ already installed.

**To install the setup**:
```
git clone git@github.com:paradime-io/frontend-test.git
yarn install
```

**Installing Node**: (*if you need*)
```
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | zsh

# verify installation - should output nvm if successful
command -v nvm

# install Node 15 and set to default
nvm install 15.10.0
nvm alias default 15.10.0
nvm use 15.10.0

# install yarn
npm install --global yarn
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Challenge

We are going to build our main code editor application logic. Since we are a small team we are really scarce in resources and we don't even have a designer!!! So our scrappy
product manager has built the basic design of the app using [Material-UI](https://material-ui.com/) and [Monaco Code Editor](https://github.com/react-monaco-editor/react-monaco-editor) - if you need to consult dev docs.

He has also written out the following user stories for you:

### US-1.1 (open workspace dialog):
As a product manager, I expect that when the "Open Workspace" button is clicked that there is a dialog box with an input field that allows me to select a directory using the system file dialog and two buttons - "OK" and "Cancel". When a directory is selected and the "OK" button is pressed, the dialog box closes and the selected directory and its contents are displayed in the file explorer. When the "Cancel" button is clicked, nothing happens and the dialog box closes.

### US-1.2 (opening files in the editor):
As a product manager, I expect that when a file is double clicked in the file viewer, the file would open as a new tab in the code editor.

### US-1.3 (persistent) [Bonus]
As a product manager, I expect that when the application is closed i.e. by closing the browser window / tab and then it's opened again, then the last state of the app should be restored i.e. the file viewer should have the last opened directory and the code editor should have the last opened file tabs opened.

### Guidelines:

As a startup, it's sometimes hard to be too prescriptive and we rely on our engineering team to exercise good judgment.

So make any changes to existing components if you think that's necessary. But as a minimum:

- the app must work and product expected results
- the code should be clean and clear and easy to read
# QuillWrapper
React-Quill Wrapper for Microsoft Fluent UI (Office UI)

Developed with create-react-app and typescript template
You can use it in your SPFX Project!

## DEMO
### Video
![Demo Gif](./docu/demo.gif)

### Functional
[vreezy.de/github/quillwrapper](https://vreezy.de/github/quillwrapper/)

## Features
* Translation (QuillWrapper.css),
* Custom Toolbar,
* Office UI Icons,
* Hover, Focus and Error Border Colors and Size,
* errorMessage like Basic Inputs from Office UI (animation -> slideDownIn20)

## Installation in your Project
copy the QuillWrapper component into your project and install: 
* npm install react-quill
* npm i @uifabric/styling --save
* npm i @fluentui/react

## Packages Docus
* https://www.npmjs.com/package/react-quill
* https://docs.microsoft.com/de-de/sharepoint/dev/spfx/office-ui-fabric-integration#usage-of-the-office-ui-fabric-icons-in-spfx-components
* https://developer.microsoft.com/en-us/fluentui#/


# Trello / Project Management
https://trello.com/b/fXiiPKZh/quillwrapper

# Tests
## Border
* init - Border 1px gray
* no focus + on Hover - Border 1px black
* no focus + on out - Border 1px gray
* on focus - Border 2px blue
* on blur - Border 1px gray
* error + focus - Border 2px red
* error + blur - Border 1px red
* error + hover - Border 1px red
* error + out - Border 1px red

# Original Readme from create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


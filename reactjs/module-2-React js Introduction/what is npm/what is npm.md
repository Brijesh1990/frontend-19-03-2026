# What is npm?

npm stands for Node Package Manager.

It is the default package manager for Node.js and is used to install, update, and manage libraries and tools for JavaScript projects.

## Why is npm important?

JavaScript projects often depend on external packages such as:

- React
- React DOM
- express
- lodash
- axios
- Bootstrap

Instead of writing everything from scratch, developers can install ready-made packages using npm.

## What does npm do?

npm helps with:

- installing packages
- removing packages
- updating packages
- managing project dependencies
- running scripts
- sharing project setup with other developers

## How npm works

When you create a Node.js project, npm creates a file called `package.json`.

This file stores:

- project name
- version
- dependencies
- scripts
- author and other metadata

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0"
  },
  "scripts": {
    "start": "node app.js"
  }
}
```

## Common npm commands

### 1. Initialize a project

```bash
npm init
```

This creates a `package.json` file.

### 2. Install a package

```bash
npm install react
```

This adds the package to your project and saves it in `package.json`.

### 3. Install a package as a development dependency

```bash
npm install --save-dev vite
```

Development dependencies are used for tools used during development, such as bundlers and compilers.

### 4. Install all project dependencies

```bash
npm install
```

This reads `package.json` and installs everything listed.

### 5. Remove a package

```bash
npm uninstall react
```

### 6. Run a script

```bash
npm run start
```

This runs scripts defined in `package.json`.

## Example project flow

```bash
npm init
npm install react react-dom
npm run start
```

This is a typical flow when starting a simple React or Node project.

## npm vs npx

- `npm` is used to install packages and manage dependencies.
- `npx` is used to run a package directly without installing it globally.

Example:

```bash
npx create-react-app my-app
```

## Benefits of npm

- easy to install packages
- huge ecosystem of libraries
- version control for dependencies
- works well with Node.js projects
- helps save time and effort in development

## Simple real-world example

Suppose you want to use `axios` to fetch data from an API. Instead of writing the entire HTTP logic yourself, you can install it:

```bash
npm install axios
```

Then import it in your app:

```javascript
import axios from 'axios';
```

## Conclusion

npm is a package manager that helps developers install and manage JavaScript libraries and tools efficiently. It is one of the most important tools in modern JavaScript and React development.

In short:

- npm = Node Package Manager
- it installs packages
- it manages dependencies
- it helps run project scripts
- it makes development faster and easier

## Quick summary

```bash
npm init
npm install package-name
npm install --save-dev package-name
npm uninstall package-name
npm run script-name
```

This basic understanding of npm is essential for working with React, Node.js, and modern JavaScript projects.

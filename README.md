## React Project Boilerplate

### Used Packages

- (Prettier)['https://prettier.io/']
  A package the standardized code format

```cmd
npm i -D prettier
```

Prettier configuration in package.json

1. Add formate to scripts, to run prettier in each file in src

```json
"format": "prettier \"src/**/*.{js,html}\" --write"
```

2. Prettier Setup

- Via VS code download [Prettier-Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20Formatter%20for%20Visual%20Studio,account%2C%20wrapping%20code%20when%20necessary.)

- Turn on Editor Formate on Save
- Turn on Require Config
- Create prettier config file .prettierrc

* [ESLint](https://eslint.org/)

Concerns with coding style

```cmd
npm install -D eslint eslint-config-prettier
```

1. ESLint config

- Create .eslintrc.json
- Extends: it contains the rules of ESLint
- ecmaVersion: Means we are going to use ES6, like Async
- sourceType: means we are going to use import/export
- ecmaFeatures: it supports jxs
- es6: like it is going to be annoyed by es6 features
- browser: supports the window objects like setTimeout
- node: supports nodeJS like HTTP and required()

2. Package.json config
   inside scripts

-

```cmd
"lint": "eslint \"src/\*_/_.{js,jsx}\" --quiet"
```

- Download ESLint [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) via VScode store

* [Parcel](https://parceljs.org/)
  Bundler project, it does not need any configuration
  Trick you can download any package by just importing it
  and parcel will download it for us

```cmd
npm install -D parcel-bundler
```

- in script in package.json add the following script "dev": "parcel src/index.html"

* React & ReactDOM

```cmd
npm i react react-dom
```

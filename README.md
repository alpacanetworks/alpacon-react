# Alpacon React

Alpacon React is a front-end app for Alpaca Infra Platform built on React. You need `node` to test and build this project.

## Run API server

We suppose alpacon-server is running on localhost:8000. Please make sure to run alpacon-server first before running this app.

## Run this app

### Configure npm token for Font Awesome

Obtain the auth token for Font Awesome and run the following command to apply it for all projects. Please fill out the auth token to the field marked by `***`. (Please note that the auth token is not included in this README for security.)

```bash
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" ***
```

### Install packages

```bash
npm install
```

If you see "401 Unauthorized", configure the font awesome token first.

### Run a development server

You can run a development node server locally. This is a preferred way to run alpacon-react for development.

```bash
npm run dev
```

Open http://localhost:3000 in your Web browser.

IMPORTANT: Please make sure to use different Web browser to access localhost:3000 and localhost:8000 as the cookies cannot be shared.

### Build project for production

For deployment, run the following command and upload the content in `dist` folder.

```bash
npm run build
```

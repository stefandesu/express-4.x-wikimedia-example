Based on https://github.com/passport/express-4.x-facebook-example.

This example demonstrates how to use [Express](http://expressjs.com/) 4.x and
[Passport](http://passportjs.org/) to authenticate users using GitHub.  Use
this example as a starting point for your own web applications.

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone https://github.com/stefandesu/express-4.x-github-example.git
$ cd express-4.x-github-example
$ npm install
```

The example uses environment variables to configure the consumer key and
consumer secret needed to access GitHub's API. You can go [here](https://github.com/settings/applications/new) to create a new OAuth application for GitHub.  Start the server with those
variables set to the appropriate credentials.

```bash
$ CLIENT_ID=__GITHUB_CLIENT_ID__ CLIENT_SECRET=__GITHUB_CLIENT_SECRET__ node server.js
```

Alternatively, you can provide a `.env` file in the following form:
```bash
CLIENT_ID=__GITHUB_CLIENT_ID__
CLIENT_SECRET=__GITHUB_CLIENT_SECRET__
PORT=__EXPRESS_PORT__
```

Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/)
(adjust port if necessary) to see the example in action.

Based on [express-4.x-github-example](https://github.com/stefandesu/express-4.x-github-example) (which in turn is based on [express-4.x-facebook-example](https://github.com/passport/express-4.x-facebook-example)), using [passport-mediawiki-oauth](https://github.com/milimetric/passport-mediawiki-oauth).

This example demonstrates how to use [Express](http://expressjs.com/) 4.x and
[Passport](http://passportjs.org/) to authenticate users using Wikimedia/MediaWiki. Use
this example as a starting point for your own web applications.

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone https://github.com/stefandesu/express-4.x-wikimedia-example.git
$ cd express-4.x-wikimedia-example
$ npm install
```

The example uses environment variables to configure the consumer key and
consumer secret needed to access Wikimedia/MediaWiki's API. You can go [here](https://www.mediawiki.org/wiki/OAuth/For_Developers) for more information on how to create a new OAuth application for Wikimedia/MediaWiki.  Start the server with those
variables set to the appropriate credentials.

```bash
$ CONSUMER_KEY=__WIKIMEDIA_CONSUMER_KEY__ CONSUMER_SECRET=__WIKIMEDIA_CONSUMER_SECRET__ node server.js
```

Alternatively, you can provide a `.env` file in the following form:
```bash
CONSUMER_KEY=__WIKIMEDIA_CONSUMER_KEY__
CONSUMER_SECRET=__WIKIMEDIA_CONSUMER_SECRET__
PORT=__EXPRESS_PORT__
```

Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/)
(adjust port if necessary) to see the example in action.

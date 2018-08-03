var express = require('express');
var passport = require('passport');
var Strategy = require('passport-mediawiki-oauth').OAuthStrategy;
require("dotenv").config();

var port = process.env.PORT || 3000;

// Configure the Wikimedia/MediaWiki strategy for use by Passport.
//
// OAuth 1.0a-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Wikimedia/MediaWiki API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: `http://localhost:${port}/login/wikimedia/return`
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Wikimedia/MediaWiki profile is supplied as the user
    // record.  In a production-quality application, the Wikimedia/MediaWiki profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Wikimedia/MediaWiki profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Create a new Express application.
var app = express();

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/wikimedia',
  passport.authenticate('mediawiki'));

app.get('/login/wikimedia/return',
  passport.authenticate('mediawiki', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

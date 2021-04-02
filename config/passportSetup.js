const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const GitHubStrategy = require("passport-github2");
const config = require("config");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/api/auth/google/redirect",
      clientID: config.get("clientId_g"),
      clientSecret: config.get("clientSecret_g"),
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((user) => {
        if (user) {
          done(null, user);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: config.get("clientId_hub"),
      clientSecret: config.get("clientSecret_hub"),
      callbackURL: "/api/auth/github/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ githubId: profile.id }).then((user) => {
        if (user) {
          done(null, user);
        } else {
          new User({
            username: profile.displayName,
            githubId: profile.id,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

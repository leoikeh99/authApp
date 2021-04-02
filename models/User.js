const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    password: {
      type: String,
    },
    bio: {
      type: String,
      default: "",
    },
    googleId: {
      type: String,
    },
    githubId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);

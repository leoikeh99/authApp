const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    google: {
      id: { type: String },
      token: { type: String },
      email: { type: String },
      name: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);

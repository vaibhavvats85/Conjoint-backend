const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: "Name is required!",
    },
    email: {
      type: String,
      required: "Email is required!",
    },
    password: {
      type: String,
      required: "Password is required!",
    },
    Type: {
        type: String,
        required: "type is required!",
      },
    To: {
        type: JSON,
        required: "Name is required!",
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
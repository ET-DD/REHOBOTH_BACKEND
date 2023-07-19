import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "fullname is required."],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "email is required"]

  },
  phoneNumber: {
    type: String,
    required: [true, "phoneNumber name is required."],
    minlength: 9,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default model("User", userSchema);

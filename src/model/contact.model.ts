import { Schema, model } from "mongoose";

const ContactSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  phoneNumber: { type: Array },
  subject: { type: String },
  message: { type: String }
});

export default model("Contact", ContactSchema);

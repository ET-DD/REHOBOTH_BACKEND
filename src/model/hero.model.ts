import { Schema, model } from "mongoose";

const heroSchema = new Schema({
  title: { type: String },
  description: { type: String },
  files: { type: String },
});

export default model("Hero", heroSchema);

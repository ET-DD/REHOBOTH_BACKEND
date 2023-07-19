import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
  title: { type: String },
  body: { type: String },
});

const FolderSchema = new Schema({
  userId: {
    type: String
  },
  name: {
    type: String,
  },
  note: { type: [NoteSchema], default: [] },
});

export default model("Note", FolderSchema);

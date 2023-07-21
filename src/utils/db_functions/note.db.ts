import mongoose from "mongoose";
import NoteModel from "../../model/note.model";

export async function getAllFolders() {
  try {
    const folders = await NoteModel.find();
    return folders;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showFolder(id: string) {
  try {
    const folder = await NoteModel.findById(id);
    return folder;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}

export async function getAllNotes(id: string) {
  try {
    const Folders = await NoteModel.findById(id);
    const notes = Folders.note;
    return notes;
  } catch (error) {
    // Handle error
    console.error("Error retrieving note:", error);
    throw error;
  }
}

export async function showNote(id: string) {
    const note = await NoteModel.findOne({
      "note._id": new mongoose.Types.ObjectId(id)}, { "note.$": 1 }
    );

    return note?.note[0] || null;
  }

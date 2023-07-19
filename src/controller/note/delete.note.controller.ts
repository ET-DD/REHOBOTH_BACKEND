import { Request, Response } from "express";
import NoteModel from "../../model/note.model";
import mongoose from "mongoose";
export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updatedNote = await NoteModel.findOneAndDelete(
    { "note._id": new mongoose.Types.ObjectId(id) });
  
  if (!updatedNote) {
    return res.status(404).json({
      message: "note not found",
      success: false,
    });
  }
  return res.status(201).json({
    message: "note deleted successfully",
    success: false,
  });
};
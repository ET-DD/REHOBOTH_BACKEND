import { Request, Response } from "express";
import NoteModel from "../../model/note.model";
import mongoose, { mongo } from "mongoose";
export const createNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.params;
  const updatedFolder = await NoteModel.findByIdAndUpdate(
    { "note._id": new mongoose.Types.ObjectId(id) },
    { $push: { "note.$.title": title } },
    { new: true }
  );

  if (!updatedFolder) {
    return res.status(404).json({
      message: "note not found",
      success: false,
    });
  }
  const createdNote = updatedFolder.note[updatedFolder.note.length - 1];
  return res.status(201).json({
    message: "note created successfully",
    success: true,
    id: createdNote._id,
  });
};

export const createBody = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req.body;
  const updatedFolder = await NoteModel.findOneAndUpdate(
    { "note._id": new mongoose.Types.ObjectId(id) },
    { $set: { "note.$.body":   body  } },
      { new: true }
  );

  if (!updatedFolder) {
    return res.status(404).json({
      message: "note not found",
      success: false,
    });
  }
  const createdNote = updatedFolder.note[updatedFolder.note.length - 1];
  return res.status(201).json({
    message: "note saved",
    success: true,
    id: createdNote._id,
  });
};

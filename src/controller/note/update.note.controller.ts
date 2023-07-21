import { Request, Response } from "express";
import NoteModel from "../../model/note.model";
import mongoose from "mongoose";

export const updateNote = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const { id } = req.params;
  NoteModel.findOneAndUpdate(
    { "note._id": new mongoose.Types.ObjectId(id) },
    { $set: { "note.$.title": title, 
    "note.$.body": body   } },
    { new: true }
  )
    .then((updatedNote) => {
      if (updatedNote) {
        return res.status(201).json({
          message: "note updated successfully",
          success: true,
        });
      } else {
        return res.status(201).json({
          message: "note not found with the given ID.",
          success: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error updating note:", error);
    });
};

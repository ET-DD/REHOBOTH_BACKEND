import { Request, Response } from "express";
import NoteModel from "../../model/routes.model";
import mongoose from "mongoose";

export const updatePath = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id } = req.params;
  NoteModel.findOneAndUpdate(
    { "path._id": new mongoose.Types.ObjectId(id) },
    { $set: { "path.$.name": name,} },
    { new: true }
  )
    .then((updatedPath) => {
      if (updatedPath) {
        return res.status(201).json({
          message: "path updated successfully",
          success: true,
        });
      } else {
        return res.status(201).json({
          message: "path not found with the given ID.",
          success: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error updating path:", error);
    });
};

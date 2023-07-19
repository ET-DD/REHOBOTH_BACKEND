import NoteModel from "../../model/note.model";
import { Request, Response } from "express";
export const updateFolder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const verifyFolder = await NoteModel.findOne({ _id: id });

  if (verifyFolder) {
    await NoteModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(201).json({
      message: "folder updated successfully",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "folder not found",
      success: true,
    });
  }
};

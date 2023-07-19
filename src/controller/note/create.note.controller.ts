import { Request, Response } from "express";
import NoteModel from "../../model/note.model";
export const createNote = async (req: Request, res: Response) => {
  const { folderId } = req.params;
  const updatedFolder = await NoteModel.findByIdAndUpdate(
    folderId,
    { $push: { note: req.body } },
    { new: true }
  );

  if (!updatedFolder) {
    return res.status(404).json({
      message: "menu type not found",
      success: false,
    });
  }
  const createdNote = updatedFolder.note[updatedFolder.note.length - 1];
  return res.status(201).json({
    message: "menu cat created successfully",
    success: true,
    id: createdNote._id,
  });
};

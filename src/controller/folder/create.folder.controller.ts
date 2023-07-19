import { Response } from "express";
import NoteModel from "../../model/note.model";
import { IncomingMessage, UserDataType } from "../../middleware/authJWT";

export const createFolder = async (req: IncomingMessage, res: Response) => {
  const { name } = req.body;
  const { userId } = req.userData as UserDataType;
  const createFolder = new NoteModel({ name, userId });
  const createdFolder = await createFolder.save();
  return res.status(201).json({
    message: "Folder created successfully",
    success: true,
    id: createdFolder._id,
  });
};

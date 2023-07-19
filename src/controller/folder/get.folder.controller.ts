import { Request, Response } from "express";
import { getAllFolders, showFolder, } from "../../utils/db_functions/note.db";

export const getFolders = async (req: Request, res: Response) => {
  const folders = await getAllFolders()
  res.status(200).send(folders);
};

export const getFolder = async (req: Request, res: Response) => {
  const { id } = req.params
  const folder = await showFolder(id);
  res.status(200).send(folder);
};



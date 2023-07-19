import { Request, Response } from "express";
import { getAllNotes, showNote } from "../../utils/db_functions/note.db";

export const getNotes = async (req: Request, res: Response) => {
    const { id } = req.params
    const notes = await getAllNotes(id);
    res.status(200).send(notes);
  };
  
export const getNote = async (req: Request, res: Response) => {
    const { id } = req.params
    const notes = await showNote(id);
    res.status(200).send(notes);
  };
  

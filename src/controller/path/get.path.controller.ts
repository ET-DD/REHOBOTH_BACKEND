import { Request, Response } from "express";
import { getAllPath, showPath } from "../../utils/db_functions/route.db";

export const getPaths = async (req: Request, res: Response) => {
    const { id } = req.params
    const notes = await getAllPath(id);
    res.status(200).send(notes);
  };
  
export const getPath = async (req: Request, res: Response) => {
    const { id } = req.params
    const notes = await showPath(id);
    res.status(200).send(notes);
  };
  

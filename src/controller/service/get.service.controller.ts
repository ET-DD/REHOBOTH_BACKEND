import { Request, Response } from "express";
import { getAllServices, showService, } from "../../utils/db_functions/service.db";

export const getServices = async (req: Request, res: Response) => {
  const folders = await getAllServices()
  res.status(200).send(folders);
};

export const getService = async (req: Request, res: Response) => {
  const { id } = req.params
  const folder = await showService(id);
  res.status(200).send(folder);
};



import { Request, Response } from "express";
import { getAllHeros, showHero } from "../../utils/db_functions/hero.db";

export const getHeros = async (req: Request, res: Response) => {
  const folders = await getAllHeros();
  res.status(200).send(folders);
};

export const getHero = async (req: Request, res: Response) => {
  const { id } = req.params;
  const folder = await showHero(id);
  res.status(200).send(folder);
};

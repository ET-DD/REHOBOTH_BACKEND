import { Request, Response } from "express";
import { getAllRoutes, showRoute, } from "../../utils/db_functions/route.db";

export const getRoutes = async (req: Request, res: Response) => {
  const routes = await getAllRoutes()
  res.status(200).send(routes);
};

export const getRoute = async (req: Request, res: Response) => {
  const { id } = req.params
  const route = await showRoute(id);
  res.status(200).send(route);
};



import { Request, Response } from "express";
import {
  getAllPortfolios,
  showPortfolio,
} from "../../utils/db_functions/portfolio.db";

export const getPortfolios = async (req: Request, res: Response) => {
  const portfolios = await getAllPortfolios();
  res.status(200).send(portfolios);
};

export const getPortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const portfolio = await showPortfolio(id);
  res.status(200).send(portfolio);
};

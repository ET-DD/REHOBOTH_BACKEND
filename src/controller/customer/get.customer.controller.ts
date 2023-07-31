import { Request, Response } from "express";
import { getAllCustomers, showCustomer } from "../../utils/db_functions/customer.db";

export const getCustomers = async (req: Request, res: Response) => {
  const customers = await getAllCustomers();
  res.status(200).send(customers);
};

export const getCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await showCustomer(id);
  res.status(200).send(customer);
};

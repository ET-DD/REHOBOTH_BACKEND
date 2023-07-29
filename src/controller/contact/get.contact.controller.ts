import { Request, Response } from "express";
import { getAllContacts, showConact } from "../../utils/db_functions/contact.db";

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await getAllContacts();
  res.status(200).send(contacts);
};

export const getContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contact = await showConact(id);
  res.status(200).send(contact);
};

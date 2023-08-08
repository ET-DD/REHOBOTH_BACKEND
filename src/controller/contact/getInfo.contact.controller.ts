import { Request, Response } from "express";
import { getAllContactInfos, showConactinfo } from "../../utils/db_functions/contactInfo.db";

export const getContactInfos = async (req: Request, res: Response) => {
  const contacts = await getAllContactInfos();
  res.status(200).send(contacts);
};

export const getContactInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contact = await showConactinfo(id);
  res.status(200).send(contact);
};

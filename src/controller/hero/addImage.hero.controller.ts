
import { Request, Response } from "express";
import { Mloop } from "../../utils/db_functions/help";
import HeroModel from "../../model/hero.model";

export const addImage = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { id } = req.params;
  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        const urls = await Mloop(files);

        //we use uuidv4 to generate a random and unique id for the heros
        const verifyhero = await HeroModel.findOne({ _id: id });
        if (!verifyhero) {
          return res.status(404).json({
            message: "hero not found",
            status: false,
          });
        }
        const filesarray = verifyhero.files;
        filesarray.push(urls);
        verifyhero.save();
        return res.status(201).json({
          success: true,
          message: "image added sucessfully",
        });
      } 
    } else {
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  } catch (error) {
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};

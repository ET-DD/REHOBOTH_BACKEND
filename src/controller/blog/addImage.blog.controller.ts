//Importing the product model to the controller
import BlogModel from "../../model/blog.model";

// Importing the the cloudinary config
import { uploads } from "../../config/cloudinary";
import { Request, Response } from "express";
//Imporing file system library
import fs from "fs";
import { IncomingMessage } from "../../middleware/authJWT";
import { loop } from "../../utils/db_functions/help";

export interface FilesObject {
  url: string;
  id: string;
}

export interface IncomingFile extends Request {
    Ifiles?: FilesObject[];
}

export const addImage = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { id } = req.params;
  try {
    if (req.method === "POST") {
      if (req.files) {
        const Ifiles = req.files;
       const url = loop(Ifiles)
      console.log(url)

      }
      //we use uuidv4 to generate a random and unique id for the blogs
      const verifyblog = await BlogModel.findOne({ _id: id });
      if (!verifyblog) {
        return res.status(404).json({
          message: "blog not found",
          status: false,
        });
      }
      const filesarray = verifyblog.files;
      // filesarray.push(url);
      verifyblog.save();
      return res.status(201).json({
        success: true,
        message: "image added sucessfully",
      });
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

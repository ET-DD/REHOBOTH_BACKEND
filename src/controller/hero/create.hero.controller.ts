//Importing the product model to the controller
import HeroModel from "../../model/hero.model";

// Importing the the cloudinary config
import { uploads } from "../../config/cloudinary";

//Imporing file system library
import fs from "fs";
import { Request, Response } from "express";

export const create = async (req:Request, res:Response) => {
  //Destruct the data sent from req.body
  const { title, description } = req.body;
  const uploader = async (path) => await uploads(path, "Images");

  try {
    if (req.method === "POST") {
      const urls = [];
      if (req.files) {
        const files = req.files;
        for (const file of files) {
          const { path } = file;
          const newPath = await uploader(path);
          urls.push(newPath);
          fs.unlinkSync(path);
        }
      }

      //we use uuidv4 to generate a random and unique id for the heros

      //creating the hero
      const hero = await new HeroModel({
        title: title,
        description: description,
        files: urls,
      });

      hero.save();
      return res.status(201).json({
        success: true,
        message: "hero created sucessfully",
        data: hero,
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

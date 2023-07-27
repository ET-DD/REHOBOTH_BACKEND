//Importing the product model to the controller
import HeroModel from "../../model/hero.model";

// Importing the the cloudinary config
import { uploads } from "../../config/cloudinary";

//Imporing file system library
import fs from "fs";
import { Request, Response } from "express";


export const update = async (req:Request, res:Response) => {
  //Destruct the data sent from req.body
  const uploader = async (path) => await uploads(path, "Images");
  //Destructing the id from req.params
  const { id } = req.params;
  //assigning the specfic hero to variable called hero
  const hero = await HeroModel.findOne({ heroId: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!hero) {
      return res.status(400).json({
        success: false,
        message: "hero not found",
      });
    }

    //updating the datas of that hero
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

    hero.updateOne(req.body, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update hero with id=${id}. Maybe hero was not found!`,
        });
      } else
        return res.status(201).json({ message: "hero updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};

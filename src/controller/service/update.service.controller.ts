//Importing the product model to the controller
import ServiceModel from "../../model/service.model";

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
  //assigning the specfic product to variable called product
  const services = await ServiceModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!services) {
      return res.status(400).json({
        success: false,
        message: "services not found",
      });
    }

    //updating the datas of that product
    // const urls = [];
    // if (req.files) {
    //   const files = req.files;
    //   // for (const file of files) {
    //   //   const { path } = file;
    //   //   const newPath = await uploader(path);
    //   //   urls.push(newPath);
    //   //   fs.unlinkSync(path);
    //   // }
    // }

    services.updateOne(req.body, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update services with id=${id}. Maybe services was not found!`,
        });
      } else
        return res
          .status(201)
          .json({ message: "services updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};

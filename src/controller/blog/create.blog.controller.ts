//Importing the product model to the controller
import BlogModel from "../../model/blog.model";
import { Mloop } from "../../utils/db_functions/help";
import { Request, Response } from "express"
export const create = async (req: Request , res: Response) => {
  //Destruct the data sent from req.body
  const { title, description, links, body } = req.body;

  try {
    if (req.method === "POST") {
      console.log("req.body",req.body)
        const files = req.files;
        console.log("files", files)
        const urls = await Mloop(files);
      //creating the blog
      const blog = await new BlogModel({
        title: title,
        description: description,
        body: body,
        links: links,
        files: urls,
      });

      blog.save();
      return res.status(201).json({
        success: true,
        message: "blog created sucessfully",
        blog,
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

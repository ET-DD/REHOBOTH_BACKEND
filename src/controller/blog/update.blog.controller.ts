import BlogModel from "../../model/blog.model";
import { Request, Response } from "express";

export const update = async (req:Request, res:Response) => {
  const { id } = req.params;
  //assigning the specfic blog to variable called blog
  const blog = await BlogModel.findOne({ blogId: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!blog) {
      return res.status(400).json({
        success: false,
        message: "blog not found",
      });
    }

    blog.updateOne(req.body, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update blog with id=${id}. Maybe blog was not found!`,
        });
      } else
        return res.status(201).json({ message: "blog updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};

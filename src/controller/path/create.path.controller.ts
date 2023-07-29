import { Request, Response } from "express";
import RouteModel from "../../model/routes.model";
import mongoose from "mongoose";
export const createPath = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.params;
  const updatedRoute = await RouteModel.findByIdAndUpdate(
    { "path._id": new mongoose.Types.ObjectId(id) },
    { $push: { "path.$.name": name } },
    { new: true }
  );

  if (!updatedRoute) {
    return res.status(404).json({
      message: "path not found",
      success: false,
    });
  }
  const createdPath = updatedRoute.path[updatedRoute.path.length - 1];
  return res.status(201).json({
    message: "path created successfully",
    success: true,
    id: createdPath._id,
  });
};


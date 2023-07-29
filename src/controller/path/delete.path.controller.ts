import { Request, Response } from "express";
import RouteModel from "../../model/routes.model";
import mongoose from "mongoose";
export const deletePath = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updatedPath = await RouteModel.findOneAndDelete(
    { "note._id": new mongoose.Types.ObjectId(id) });
  
  if (!updatedPath) {
    return res.status(404).json({
      message: "path not found",
      success: false,
    });
  }
  return res.status(201).json({
    message: "path deleted successfully",
    success: false,
  });
};
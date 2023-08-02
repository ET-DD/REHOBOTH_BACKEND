import { Request, Response } from "express";
import RouteModel from "../../model/routes.model";
// import mongoose from "mongoose";
export const deletePath = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // RouteModel.findOneAndRemove({"path._id":id});
    const result = await RouteModel.updateOne(
      { "path._id": id },
      { $pull: { path: { _id: id } } }
    );
    return res.status(201).json({
      message: "path deleted successfully",
      success: false,
    });
  } catch (error) {
    console.error("Error deleting path from route:", error.message);
  }

  
};

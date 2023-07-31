import { Request, Response } from "express";
import RouteModel from "../../model/routes.model";
import mongoose from "mongoose";
export const createPath = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedRoute = await RouteModel.findOne({_id: id})
  const pathObj = {
    name: name
  }
  if (!updatedRoute) {
    return res.status(404).json({
      message: "path not found",
      success: false,
    });
  }

  const path = updatedRoute.path 
  path.push(pathObj)
  updatedRoute.save()
  const createdPath = updatedRoute.path[updatedRoute.path.length - 1];
  return res.status(201).json({
    message: "path created successfully",
    success: true,
    id: createdPath._id,
  });
};


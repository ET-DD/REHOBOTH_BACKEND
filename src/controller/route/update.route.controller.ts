import RouteModel from "../../model/routes.model";
import { Request, Response } from "express";
export const updateRoute = async (req: Request, res: Response) => {
  const { id } = req.params;
  const verifyRoute = await RouteModel.findOne({ _id: id });

  if (verifyRoute) {
    await RouteModel.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(201).json({
      message: "route updated successfully",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "route not found",
      success: true,
    });
  }
};

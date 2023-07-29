import { Request, Response } from "express";
import RouteModel from "../../model/routes.model";

export const createRoute = async (req: Request, res: Response) => {
  const { startingPoint, endingPoint } = req.body;
  // const { userId } = req.userData as UserDataType;
  const createroute = new RouteModel({ startingPoint, endingPoint  });
  const createdroute = await createroute.save();
  return res.status(201).json({
    message: "route created successfully",
    success: true,
    id: createdroute._id,
  });
};

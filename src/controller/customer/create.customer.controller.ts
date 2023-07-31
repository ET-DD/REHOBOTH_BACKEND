//Importing the hero model to the controller
import CustomerModel from "../../model/customer.model";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { parentName, phoneNumber, childName, childAge, routeId } = req.body;

  try {
        const Customer = await new CustomerModel({
          parentName: parentName,
          childName: childName,
          childAge: childAge, 
          routeId: routeId,
          phoneNumber: phoneNumber
        });

        Customer.save();
        return res.status(201).json({
          success: true,
          message: "you have registered successfully",
        });
  } catch (error) {
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};

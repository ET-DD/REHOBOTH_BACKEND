//Importing the hero model to the controller
import { Request, Response } from "express";
import CustomerModel from "../../model/customer.model";
import { Mloop, loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const {
    fatherName,
    motherName,
    studentName,
    studentGender,
    studentAge,
    studentGrade,
    startingPoint,
    FphoneNumber,
    MphoneNumber,
    medical,
    routeId,
  } =  req.body;

  // try {
  if (req.method === "POST") {
    console.log("req.body", req.body)
    const files = req.files;
    console.log("files", files);
    const urls = await Mloop(files);
    const Customer = await new CustomerModel({
      fatherName: fatherName,
      motherName: motherName,
      studentName: studentName,
      FphoneNumber: FphoneNumber,
      MphoneNumber: MphoneNumber,
      studentAge: studentAge,
      studentGrade: studentGrade,
      studentGender: studentGender,
      startingPoint: startingPoint,
      files: urls,
      medical: medical,
      routeId: routeId,
    });

    Customer.save();
    return res.status(201).json({
      success: true,
      message: "you have registered successfully",
    });
    // } else {
    //   const Customer = await new CustomerModel({
    //     fatherName: fatherName,
    //     motherName: motherName,
    //     studentName: studentName,
    //     FphoneNumber: FphoneNumber,
    //     MphoneNumber: MphoneNumber,
    //     studentAge: studentAge,
    //     studentGrade: studentGrade,
    //     studentGender: studentGender,
    //     startingPoint: startingPoint,
    //     medical: medical,
    //     routeId: routeId,
    //   });

    //   Customer.save();
    //   return res.status(201).json({
    //     success: true,
    //     message: "you have registered successfully",
    //   });
    // }
  } else {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }
};

// import { NextFunction, Request, Response } from "express";

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export interface IncomingMessage extends Request {
  userData?: UserDataType | jwt.JwtPayload | string;
}

export interface UserDataType {
  accessToken: string;
  userId: string;
}

export const authJWT = (
  req: IncomingMessage,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const decoded = jwt.verify(
      token ? token : "",
      process.env.JWT_SECRET as string
    );
    req.userData = decoded;
    // console.log(req.userData);
    next();
  } catch (err) {
    return res.status(403).json({
      message: "unauthorized crediential",
    });
  }
};

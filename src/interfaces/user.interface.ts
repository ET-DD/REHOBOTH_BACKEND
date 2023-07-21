import { ObjectId } from "mongoose";

export interface User {
    fullName: string,
    email: string,
    password: string;
  }
  
export interface UserModelID extends User {
    _id:ObjectId
  }
  
import { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  parentName: { type: String },
  motherName: { type: String },
  studentName: { type: String },
  FphoneNumber: { type: String },
  MphoneNumber: { type: String },
  studentAge: { type: String },
  studentGrade: { type: String },
  startingPoint: { type: String },
  files: { type: Array },
  medical: { type: String },
  routeId: { type: String },
});

export default model("Customers", CustomerSchema);

import { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
  parentName: { type: String },
  phoneNumber: { type: String },
  childName: { type:String},
  childAge: { type: String },
  routeId: { type:String}
});

export default model("Customers", CustomerSchema);

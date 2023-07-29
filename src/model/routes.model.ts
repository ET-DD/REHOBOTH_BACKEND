import { Schema, model } from "mongoose";

const PathSchema = new Schema({
  name: { type: String },
});

const RouteShema = new Schema({
  startingPoint: {
    type: String,
  },
  endingPoint: {
    type: String,
  },
  path: { type: [PathSchema], default: [] },
});

export default model("Route", RouteShema);

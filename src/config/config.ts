import { config } from "dotenv";

config();

export const MONGO_DB_CONNECTION =
  process.env.MONGO_DB_CONNECTION || "mongodb+srv://fish:fishproject@cluster0.gkycs5b.mongodb.net/";
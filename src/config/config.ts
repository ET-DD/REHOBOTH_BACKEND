import { config } from "dotenv";

config();

export const MONGO_DB_CONNECTION =
  process.env.MONGO_DB_CONNECTION || "mongodb+srv://rehoboth:rehobothadmin@cluster0.rj341kh.mongodb.net/" 
  
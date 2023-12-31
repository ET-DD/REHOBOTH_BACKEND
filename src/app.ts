import { config } from "dotenv";
import "./utils/mongoose";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyparser from 'body-parser'
import * as middlewares from "./middlewares";
import api from "./api";
// import MessageResponse from "./interfaces/MessageResponse";

config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;

import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import auth from "./auth.api";
import note from "./note.api"; 
import folder from "./folder.api"; 


const router = express.Router();

router.get<MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/auth", auth);
router.use("/note", note);
router.use("/folder", folder);



export default router;

import express from "express";
import {
  createFolder,
  getFolders,
  getFolder,
  deleteFolder,
} from "../controller/folder/index.folder.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", authJWT, createFolder);
router.get("/get", authJWT, getFolders);
router.get("/show/:id",  authJWT,getFolder);
router.get("/update/:id",  authJWT, getFolder);

router.delete("/delete/:id", authJWT, deleteFolder);

export default router;

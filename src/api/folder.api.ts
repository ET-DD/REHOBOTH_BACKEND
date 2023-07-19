import express from "express";
import {
  createFolder,
  getFolders,
  getFolder,
  deleteFolder,
} from "../controller/folder/index.folder.controller";
const router = express.Router();

router.post("/create", createFolder);
router.get("/get", getFolders);
router.get("/show/:id", getFolder);
router.delete("/delete", deleteFolder);

export default router;

import express from "express";
import {
  createNote,
  createBody,
  getNotes,
  getNote,
  deleteNote,
  updateNote,
} from "../controller/note/index.note.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create/:id", authJWT,  createNote);
router.post("/create/body/:id", authJWT,  createBody);
router.get("/get", authJWT, getNotes);
router.get("/show/:id",  authJWT,getNote);
router.get("/update/:id",  authJWT, updateNote);
router.delete("/delete/:id",  authJWT, deleteNote);

export default router;

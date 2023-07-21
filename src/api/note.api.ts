import express from "express";
import {
  createNote,
  getAllNotes,
  showNote,
  deleteNote,
  updateNote,
} from "../controller/note/index.note.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create/:id", authJWT,  createNote);
router.get("/get", authJWT, getAllNotes);
router.get("/show/:id",  authJWT,showNote);
router.get("/update/:id",  authJWT, updateNote);
router.delete("/delete/:id",  authJWT, deleteNote);

export default router;

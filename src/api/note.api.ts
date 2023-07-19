import express from "express";
import {
  createNote,
  getAllNotes,
  showNote,
  deleteNote,
} from "../controller/note/index.note.controller";
const router = express.Router();

router.post("/create", createNote);
router.get("/get", getAllNotes);
router.get("/show/:id", showNote);
router.delete("/delete", deleteNote);

export default router;

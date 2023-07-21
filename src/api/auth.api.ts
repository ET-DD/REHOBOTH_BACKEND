import express from "express";
import {
  register,
  getUsers,
  getuser,
  login
} from "../controller/auth/index.auth.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", register);
router.get("/get", authJWT, getUsers);
router.get("/show/:id", authJWT, getuser);
router.post("/login", login);
// router.delete("/delete", deleteEmployee);

export default router;

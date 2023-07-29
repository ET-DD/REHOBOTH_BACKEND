import express from "express";
import {
 createPath, 
 getPath, 
 getPaths, 
 updatePath, 
 deletePath
} from "../controller/path/index.path.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create/:id", authJWT,  createPath);
router.get("/get", authJWT, getPaths);
router.get("/show/:id",  authJWT,getPath);
router.get("/update/:id",  authJWT, updatePath);
router.delete("/delete/:id",  authJWT, deletePath);

export default router;

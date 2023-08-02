import express from "express";
import {
 createPath, 
 getPath, 
 updatePath, 
 deletePath
} from "../controller/path/index.path.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create/:id",   createPath);
// router.get("/get",  getPaths);
router.get("/show/:id",  getPath);
router.get("/update/:id",   updatePath);
router.delete("/delete/:id",   deletePath);

export default router;

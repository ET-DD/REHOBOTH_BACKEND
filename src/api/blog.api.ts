import express from "express";
import {
  create,
  update,
  addImage,
  deleteImage,
  getBlogs,
  showBlogs,
} from "../controller/blog/index.blog";
import { authJWT } from "../middleware/authJWT";
import { upload } from "../config/mutler";
const router = express.Router();

router.post("/create", upload.array("files", 10), create);
router.post("/add-image", upload.array("files", 10), addImage);

router.get("/get",  getBlogs);
router.get("/show/:id", authJWT, showBlogs);
router.post("/update/:id", authJWT, update);
router.delete("/delete/:id", authJWT, deleteImage);

// router.delete("/delete", deleteEmployee);

export default router;

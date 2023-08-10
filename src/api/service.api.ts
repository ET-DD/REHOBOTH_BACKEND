import express from "express";
import {
    create,
    getService, 
    getServices, 
    deleteservice, 
    update


} from "../controller/service/index.service.controller";
import { authJWT } from "../middleware/authJWT";
import { upload } from "../config/mutler";
const router = express.Router();

router.post("/create", upload.array("files", 10), create);
// router.post("/add-image", upload.array("files", 10), addImage);
router.get("/get",  getServices);
router.get("/show/:id", authJWT, getService);
router.post("/update/:id", authJWT, update);
router.delete("/delete/:id", authJWT, deleteservice);

// router.delete("/delete", deleteEmployee);

export default router;

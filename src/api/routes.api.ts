import express from "express";
import {
  createRoute,
  getRoutes,
  getRoute,
  deleteRoute,
  updateRoute
} from "../controller/route/index.route.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create",  authJWT,  createRoute);
router.get("/get",  getRoutes);
router.get("/show/:id",  getRoute);
router.put("/update/:id", authJWT,   updateRoute);

router.delete("/delete/:id",  authJWT, deleteRoute);

export default router;

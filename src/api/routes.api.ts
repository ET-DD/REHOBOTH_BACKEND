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

router.post("/create", authJWT, createRoute);
router.get("/get", authJWT, getRoutes);
router.get("/show/:id",  authJWT,getRoute);
router.get("/update/:id",  authJWT, updateRoute);

router.delete("/delete/:id", authJWT, deleteRoute);

export default router;

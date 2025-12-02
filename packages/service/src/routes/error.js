import express from "express";
import { getErrorDetail } from "../controllers/errorController.js";

const router = express.Router();

// GET /error/detail?id=xxx
router.get("/detail", getErrorDetail);

export default router;

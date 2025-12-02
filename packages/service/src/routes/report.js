import express from "express";
import { handleReport } from "../controllers/reportController.js";

const router = express.Router();

// POST /report
router.post("/", handleReport);

export default router;

import express from "express";
import { jobController } from "../controller/jobController.js";

const router = express.Router();

router.post("/api/jobs", jobController.createJob);

router.get("/api/jobs", jobController.listJob);

router.put("/api/jobs/:id", jobController.updateJob);

router.delete("/api/jobs/:id", jobController.deleteJob);

export default router;

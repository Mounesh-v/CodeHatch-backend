// routes/courseRoutes.js
import express from "express";
import multer from "multer";
import { getCourses, createCourse } from "../controllers/courseController.js";
import protect  from "../middleware/authMiddleware.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/", getCourses);
router.post("/", protect, upload.single("image"), createCourse);

export default router;

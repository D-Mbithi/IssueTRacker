import express from "express";

import { register } from "../controllers/authController.js";

const router = express.Router();

// post request to /api/auth/register
router.post("/register", register);

export default router;

import express from "express";
import { getAllTeams, getTeamById, createTeam } from "../controllers/teamController.js";

import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

// get request /api/teams
router.get("/", verifyToken, getAllTeams);


// get request /api/teams/:id 
router.get("/:id", verifyToken, getTeamById);


// post request  /api/teams
router.post('/', verifyToken,  createTeam)

export default router;

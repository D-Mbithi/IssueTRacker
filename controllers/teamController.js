import Team from "../models/team.js";
import User from "../models/user.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("members", "name email -_id");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTeamById = async (req, res) => {
  try {
    // extract the id of the team

    const { id } = req.params;

    // check if the team with the provided id exists
    const team = await Team.findById(id);

    // if team does not exist send a 404 error message

    if (!team) {
      return res.status(404).json({ error: `Team with id = ${id} not found` });
    }

    // if team exists send the team back to the client

    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    //  createa new Team
    const team = new Team(req.body);
    // save the team to the database
    const result = await team.save();

    // send the team back to the client

    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

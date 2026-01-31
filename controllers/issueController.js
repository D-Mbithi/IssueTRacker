import Issue from "../models/issue.js";
import User from "../models/user.js";
import { validateIssue } from "../utils/validate.js";

export const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find().populate("createdBy");

    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIssueById = async (req, res) => {
  try {
    // extract the id
    const id = req.params.id;

    //check if the issue with the provie id exists
    const issue = await Issue.findById(id);

    // if it does not exist send a 404 error message
    if (!issue)
      return res
        .status(404)
        .json({ error: `Issue with id  = ${id} not found` });

    // if it exists send the issue back to the client

    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIssue = async (req, res) => {
  try {
    const { error } = validateIssue(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const issue = new Issue(req.body);
    const result = await issue.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIssue = async (req, res) => {
  try {
    // extract id
    const id = req.params.id;

    // const issue = await Issue.findById(id);

    // // check of the issue exist

    // if(!issue) {
    //   return res.status(404).json({error: `Issue with id = ${id} not found`})
    // }

    // update the issue

    const updatedIssue = await Issue.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateIssue);
    // send response to the client
    res.status(200).json(updatedIssue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

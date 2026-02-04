import Joi from "joi";

// create Schema

const issueSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().max(512).required(),
  createdBy: Joi.string().required(),
});

const userSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

function validateIssue(issue) {
  return issueSchema.validate(issue);
}

export function validateUser(user) {
  return userSchema.validate(user);
}

export default validateIssue;

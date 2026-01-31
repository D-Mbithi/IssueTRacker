import Joi from "joi";

// create Schema

const schema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().max(512).required(),
  createdBy: Joi.string().required(),
});

// create a function that validate a Issue based on the schema
export const validateIssue = (issue) => {
  return schema.validate(issue);
};

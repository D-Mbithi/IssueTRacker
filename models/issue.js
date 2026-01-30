import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },

  createdBy: {

    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,

  },


  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model("Issue", issueSchema);
export default Issue;

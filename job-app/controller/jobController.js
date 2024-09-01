import { JobSchema } from "../model/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const jobs = req.body;
    console.log(jobs);
    const response = await JobSchema.create(req.body);
    res.json({
      sucess: true,
      message: "Job API called",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Something went wrong, please try again later",
    });
  }
};

export const listJob = (req, res) => {
  res.json({
    success: true,
    message: "List of all jobs API called",
  });
};

export const updateJob = (req, res) => {
  res.json({
    success: true,
    message: "Update job API called",
  });
};

export const deleteJob = (req, res) => {
  res.json({
    success: true,
    message: "Delete job API called",
  });
};

export const jobController = {
  createJob,
  listJob,
  updateJob,
  deleteJob,
};

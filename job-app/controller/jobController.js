import { JobModel } from "../model/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const jobs = req.body;
    // console.log(jobs);
    const newlyInstertedJob = await JobModel.create(req.body);
    // console.log(newlyInstertedJob);

    res.json({
      sucess: true,
      message: "Job created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Something went wrong, please try again later",
    });
  }
};

export const listJob = async (req, res) => {
  const jobsData = await JobModel.find();
  res.json({
    success: true,
    message: "List of all jobs API called",
    results: jobsData,
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

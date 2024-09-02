import express from "express";
import jobRoutes from "./route/jobRoute.js";
import mongoose from "mongoose";

const app = express();

// making connection with database
mongoose
  .connect("mongodb://localhost:27017/job_app")
  .then(() => console.log("Database connected Successfully..."))
  .catch((error) => console.log("Error connecting to MongoDB", error));
// middlewares
app.use(express.json());

// routes
app.use(jobRoutes);
app.listen(8080, () => {
  console.log("Server started on port 8080");
});

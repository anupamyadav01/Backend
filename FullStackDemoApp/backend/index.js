import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 5000;
import { userModle } from "./model/userModle.js";
app.use(express.json());
dotenv.config();

const connectToDB = async () => {
  try {
    const mongodb = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Couldn't connect to MongoDB", error);
  }
};
connectToDB();

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

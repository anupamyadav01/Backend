import express from "express";
import mongoose from "mongoose";
import { DATABASE_NAME } from "./constants.js";
import dotenv from "dotenv";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();
// import { userModle } from "./model/userModle.js";
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

dotenv.config();

const connectToDB = async () => {
  try {
    const mongodb = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DATABASE_NAME}`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Couldn't connect to MongoDB", error);
  }
};
connectToDB();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
});

const userModle = mongoose.model("user", userSchema);

app.get("/", async (req, res) => {
  const dataFromDB = await userModle.find();
  res.send(dataFromDB);
});

app.post("/addUser", async (req, res) => {
  const newUser = req.body;
  new userModle(newUser).save();
  res.send({
    status: "user added successfully",
    data: newUser,
  });
});

app.delete("/deleteUser/:userId", async (req, res) => {
  const userid = req.params.userId;

  const deletedData = await userModle.findByIdAndDelete(userid);
  if (deletedData) {
    res.json({
      status: "user deleted successfully",
      data: deletedData,
    });
  } else {
    res.json({
      status: "user not found",
    });
  }
  console.log(userid);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

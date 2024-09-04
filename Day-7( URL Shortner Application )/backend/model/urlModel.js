import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
});

export const urlModel = mongoose.model("urls", urlSchema);

import mongoose from "mongoose";

const photo = new mongoose.Schema({
  url: String,
  label: String,
  user: String,
});

export const Photo = mongoose.model("Photo", photo);

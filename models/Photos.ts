import mongoose, { Document } from "mongoose";

export interface Iphoto extends Document {
  url: string;
  label: string;
  user: string;
}

const photo = new mongoose.Schema({
  url: String,
  label: String,
  user: String,
});

export const Photo =
  mongoose.models.Photo || mongoose.model<Iphoto>("Photo", photo);

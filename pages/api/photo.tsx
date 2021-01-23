import handler from "./../../middleware/handler";
import dbConnect from "./../../utils/dbConnect";
import mongoose from "mongoose";

interface Input {
  user: string;
  url: string;
  label: string;
}

handler.post(async (req, res) => {
  await dbConnect();
  const form: Input = req.body;
  console.log(form.label, form.url, form.user);
  res.status(200).json({ url: form.url });
});

export default handler;

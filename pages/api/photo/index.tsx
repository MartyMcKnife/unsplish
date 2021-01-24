import handler from "./../../../middleware/handler";
import dbConnect from "./../../../utils/dbConnect";
import { Photo } from "./../../../models/Photos";

interface Input {
  user: string;
  url: string;
  label: string;
}

handler.post(async (req, res) => {
  await dbConnect();
  const form: Input = req.body;
  Photo.create({
    url: form.url,
    label: form.label,
    user: form.user,
  });
  res.status(200).json({
    message: "Sucessfully added item to database",
    contents: { url: form.url, label: form.label, user: form.user },
  });
});

export default handler;

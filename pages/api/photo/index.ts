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

  const photo = new Photo({
    url: form.url,
    label: form.label,
    user: form.user,
  });

  photo.save((err) => {
    if (err) {
      res.status(503).json({
        message: "Looks like mongoose had an unexpected error",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Sucessfully added item to database",
        contents: { url: form.url, label: form.label, user: form.user },
      });
    }
  });
});

export default handler;

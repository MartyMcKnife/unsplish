import handler from "./../../../middleware/handler";
import dbConnect from "./../../../utils/dbConnect";
import { Iphoto, Photo } from "./../../../models/Photos";

handler.get(async (req, res) => {
  const {
    query: { label },
  } = req;

  await dbConnect();

  await Photo.find(
    { label: { $regex: `${label}`, $options: "i" } },
    (err, docs) => {
      if (err) {
        res.status(503).json({
          message: "Looks like mongoose had an unexpected error",
          error: err,
        });
      } else {
        if (docs.length <= 0) {
          res.status(404).json({ message: "No images found" });
        } else {
          const data = docs.map((doc) => {
            return { url: doc.url, label: doc.label, user: doc.user };
          });

          res.status(200).json(data);
        }
      }
    }
  );
});

export default handler;

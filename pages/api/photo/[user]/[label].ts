import handler from "../../../../middleware/handler";
import dbConnect from "../../../../utils/dbConnect";
import { Photo } from "../../../../models/Photos";

handler.get(async (req, res) => {
  let {
    query: { label, user },
  } = req;

  await dbConnect();

  if (!label) {
    console.log("no label");
    label = "";
  }

  console.log(label);
  await Photo.find(
    { label: { $regex: `${label}`, $options: "i" }, user: user.toString() },
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
            return { url: doc.url, label: doc.label };
          });

          res.status(200).json(data);
        }
      }
    }
  );
});

handler.delete(async (req, res) => {
  const {
    query: { label, user },
  } = req;

  await dbConnect();

  await Photo.findOneAndDelete(
    { label: label.toString(), user: user.toString() },
    null,
    (err: Error, docs) => {
      if (err) {
        res.status(503).json({
          message: "Looks like mongoose had an unexpected error",
          error: err,
        });
      } else {
        if (docs) {
          res.status(200).json({ message: `Successfully deleted ${label}` });
        } else {
          res.status(400).json({ message: `No image called ${label}` });
        }
      }
    }
  );
});

export default handler;

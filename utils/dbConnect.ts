import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const uri = process.env.MONGODB_URI;
  console.log(uri);
  if (uri) {
    console.log("Attempting to connect to  Mongoose");
    const connection = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    return connection;
  } else {
    throw new Error("No URI provided for Mongoose");
  }
};

export default dbConnect;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database susccessfully.");
    });

    mongoose.connection.on("error", (error) => {
      console.log("Error in connecting to database", error);
    });

    await mongoose.connect("mongodb://localhost:27017/our-linkify");
  } catch (error) {
    console.log("Failed to connect DB!!", error);
    process.exit(1);
  }
};

export default connectDB;

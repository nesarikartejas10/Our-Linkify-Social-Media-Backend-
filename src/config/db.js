import mongoose from "mongoose";
import { config } from "./envConfig.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database susccessfully.");
    });

    mongoose.connection.on("error", (error) => {
      console.log("Error in connecting to database!!", error);
    });

    await mongoose.connect(config.mongoURL);
  } catch (error) {
    console.log("Failed to connect DB!!", error);
    process.exit(1);
  }
};

export default connectDB;

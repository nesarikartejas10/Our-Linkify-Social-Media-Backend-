import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URI,
  jwtKey: process.env.JWT_KEY,
};

export const config = Object.freeze(_config);

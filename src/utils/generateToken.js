import jwt from "jsonwebtoken";
import { config } from "../config/envConfig.js";

export const generateToken = (data) => {
  return jwt.sign(data, config.jwtKey);
};

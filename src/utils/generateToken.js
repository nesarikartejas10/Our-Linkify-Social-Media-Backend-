import jwt from "jsonwebtoken";
import { config } from "../config/envConfig.js";

export const generateTokens = (data) => {
  const accessToken = jwt.sign(data, config.accessTokenSecret, {
    expiresIn: config.accessTokenExpiry,
  });

  const refreshToken = jwt.sign(data, config.refreshTokenSecret, {
    expiresIn: config.refreshTokenExpiry,
  });

  return { accessToken, refreshToken };
};

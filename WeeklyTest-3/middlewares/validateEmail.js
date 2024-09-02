import { logger } from "../index.js";

export const validateEmail = (req, res, next) => {
  logger.log("info", "Validating email");
  throw new Error(`Invalid email`);
  next();
};

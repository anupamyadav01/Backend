import { logger } from "../index.js";

export const validatePassword = (req, res, next) => {
  logger.log("info", "Validating Password");
  next();
};

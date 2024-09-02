import { logger } from "../index.js";

export const validateName = (req, res, next) => {
  logger.log("info", "Validating Name");

  next();
};

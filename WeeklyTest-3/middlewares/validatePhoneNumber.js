import { logger } from "../index.js";

export const validatePhoneNumber = (req, res, next) => {
  logger.log("info", "Validating Phone Number");

  next();
};

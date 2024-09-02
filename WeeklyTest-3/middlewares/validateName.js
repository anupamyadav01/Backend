import { logger } from "../index.js";

export const validateName = (req, res, next) => {
  const { firstName, lastName } = req.body;
  logger.log("info", "Validating Name");
  if (
    firstName.charAt(0) === firstName.charAt(0).toUpperCase() &&
    lastName.charAt(0) === lastName.charAt(0).toUpperCase()
  ) {
    next();
  } else {
    res.status(400).json({
      status: failed,
      message: "First name and last name should start with uppercase letter",
    });
  }
};

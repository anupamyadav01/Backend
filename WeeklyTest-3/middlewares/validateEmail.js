import { logger } from "../index.js";

export const validateEmail = (req, res, next) => {
  logger.log("info", "Validating email");

  const regex = /^[\w\.-]+@[a-zA-Z0-9\d\.-]+\.[a-zA-Z]{2,}$/;
  const isValid = regex.test(req.body.email);
  if (isValid) {
    next();
  } else {
    res.status(404).json({
      status: failed,
      message: "Invalid email address",
    });
  }
};

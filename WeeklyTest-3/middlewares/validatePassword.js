import { logger } from "../index.js";

export const validatePassword = (req, res, next) => {
  const password = req.body.password;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  logger.log("info", "Validating Password");
  if (password.length >= 8 && passwordRegex.test(password)) {
    next();
  } else {
    res
      .status(400)
      .json({
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.",
      });
  }
};

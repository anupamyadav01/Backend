import { logger } from "../index.js";

export const validatePhoneNumber = (req, res, next) => {
  const phoneNo = req.body.phone;
  logger.log("info", "Validating Phone Number");
  if (phoneNo.length >= 10) {
    next();
  } else {
    res.status(400).json({
      status: "failed",
      message: "Invalid Phone Number",
    });
  }
};

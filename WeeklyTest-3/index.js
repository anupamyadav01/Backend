import express from "express";
import winston from "winston";
import { validatePhoneNumber } from "./middlewares/validatePhoneNumber.js";
import { validatePassword } from "./middlewares/validatePassword.js";
import { validateName } from "./middlewares/validateName.js";
import { validateEmail } from "./middlewares/validateEmail.js";
import { handleError } from "./middlewares/errorHandler.js";
const app = express();
const port = 5000;

app.use(express.json());
export const logger = winston.createLogger({
  // Log only if level is less than (meaning more severe) or equal to this
  level: "info",
  // Use timestamp and printf to create a standard log format
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (data) => `${data.timestamp} ${data.level}: ${data.message}`
    )
  ),
  // Log to the console and a file
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post(
  "/register-user",
  validateName,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  (req, res, next) => {
    try {
      res.json({
        message: "User registered successfully",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

app.use(handleError);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

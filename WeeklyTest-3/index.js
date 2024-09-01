import express from "express";
import winston from "winston";
import dotenv from "dotenv";
import { validatePhoneNumber } from "./middlewares/validatePhoneNumber.js";
import { validatePassword } from "./middlewares/validatePassword.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
// export const logger = winston.createLogger({
//   // Log only if level is less than (meaning more severe) or equal to this
//   level: "info",
//   // Use timestamp and printf to create a standard log format
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf(
//       (data) => `${data.timestamp} ${data.level}: ${data.message}`
//     )
//   ),
//   // Log to the console and a file
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "logs/app.log" }),
//   ],
// });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post(
  "/register-user",
  validatePassword,
  validatePhoneNumber,
  (req, res) => {
    res.jons({
      message: "User registered successfully",
      user: req.body,
    });
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

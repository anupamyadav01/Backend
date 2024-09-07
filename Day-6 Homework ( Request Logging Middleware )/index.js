import express from "express";
import { requestLogger } from "./middlewares/requestLogger.js";
import { globalRequestLogger } from "./middlewares/globalRequestLogger.js";

const app = express();
app.use(globalRequestLogger);
app.use(express.json());
app.get("/", requestLogger, (req, res) => {
  res.json({
    sucess: true,
    message: "Welcome to the Homepage!!",
  });
});

app.listen(4000, () => {
  console.log("Server is up and running on port No." + 4000);
});

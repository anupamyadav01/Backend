import express from "express";
import { requestLogger } from "./middlewares/requestLogger.js";
import { globalRequestLogger } from "./middlewares/globalRequestLogger.js";

const app = express();
app.use(globalRequestLogger);
app.use(express.json());
app.get("/", (req, res) => {
  console.log("This is homepage.....");

  res.json({
    sucess: true,
    message: "Welcome to the Homepage!!",
  });
});

app.get("/add-products", requestLogger, (req, res) => {
  console.log("Called /add-products API");

  res.send({
    sucess: true,
    message: "Products added successfully.",
  });
});

app.listen(4000, () => {
  console.log("Server is up and running on port No." + 4000);
});

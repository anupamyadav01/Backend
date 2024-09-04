import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./router/urlRoutes.js";
const app = express();

const portNo = process.env.PORT_NO || 8080;
dotenv.config();

app.use(express.json());
app.use(cors({}));

app.use("", router);
app.listen(portNo, () => {
  console.log(`Server is running at http://localhost:${portNo}`);
});

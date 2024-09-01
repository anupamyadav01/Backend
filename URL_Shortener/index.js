import express from "express";
import { nanoid } from "nanoid";
import fs from "fs";
const app = express();
const portNo = 8080;
app.use(express.json());

app.post("/shorten", (req, res) => {
  const urlsDataFromFile = fs.readFileSync("data.json", "utf8");
  const parsedURLSData = JSON.parse(urlsDataFromFile);
  console.log(parsedURLSData);

  const shortURl = nanoid(5);

  parsedURLSData[shortURl] = req.body.longURL;

  fs.writeFileSync("data.json", JSON.stringify(parsedURLSData));
  res.json({
    status: true,
    data: `https://${portNo}/shorten/${nanoid(5)}`,
  });
});
app.listen(portNo, () => {
  console.log(`Server is running at http://localhost:${portNo}`);
});

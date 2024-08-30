import express from "express";

const app = express();

const port = 8008;

app.get("/", (req, res) => {});

app.listen(
  (port,
  () => {
    console.log(`Server running at http://localhost:${port}`);
  })
);

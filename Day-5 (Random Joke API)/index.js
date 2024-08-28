import express from "express";

import { jokes } from "./data.js";
const app = express();

const portNo = 8080;
// console.log(jokes.length);

app.get("/jokes", (req, res) => {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  console.log(randomNumber);

  res.json(jokes[randomNumber]);
});

app.get("/joke/:jokeId", (req, res) => {
  const { jokeId } = req.params;
  if (Number(jokeId) && Number(jokeId) > 0) {
    const requestedJoke = jokes.find((joke) => joke.id === +jokeId);
    res.status(200).json(requestedJoke);
  } else {
    res.status(400).json({
      error: "Invalid Joke ID",
    });
  }
});

app.listen(portNo, () => {
  console.log(`Server is running on port ${portNo}`);
});

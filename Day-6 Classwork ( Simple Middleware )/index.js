import express from "express";
import loggingMiddleware from "./middlewares/loggingMiddleware.js";
const app = express();
const PORT = 8080;

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

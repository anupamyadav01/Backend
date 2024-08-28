import express from "express";
import { middleware1, middleware2, middleware3 } from "./middlewaers.js";

// App Initilization
const app = express();
const port = 8080;
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

app.use(middleware1);
// app.use(middleware2);
// app.use(middleware3);
// api endpoints

app.get("/users", (req, res, next) => {
  // our api's are conditional middleware
  //   like- /users, /products
  console.log("Users GET api called");
  res.json(users);
});
app.post("/products/:productId", (req, res, next) => {
  const params = req.params;
  console.log(params);
  res.json({
    message: "sucessfully created",
    users: users,
  });
});
app.listen(port, () => {
  console.log("listening on port No.", port);
});

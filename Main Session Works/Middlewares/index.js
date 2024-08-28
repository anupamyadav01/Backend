import express from "express";
import {
  errorHandler,
  middleware1,
  middleware2,
  middleware3,
} from "./middlewaers.js";

// App Initilization
const app = express();
const port = 8080;
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    url: "http://localhost:8080/images/profile-picture.png",
  },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

// application middleware
// app.use(middleware1);
// app.use(middleware2);
// app.use(middleware3);

// to get data from user
// built in middleware
app.use(express.json());

// this middleware is used to serve static files
// if we don't use then express thinks that this is a api end point
app.use(express.static("images"));

// to get urlencoded data from user
// app.use(express.urlencoded());

// api endpoints

// built in middleware1;
// morgan
// responseTime

// how to pass data from a middleware to another middleware
// can you pass data using req parameter

app.get("/users", (req, res, next) => {
  // our api's are conditional middleware
  //   like- /users, /products
  try {
    console.log("Users GET api called");
    res.json(users);
  } catch (error) {
    next(error);
  }
});
app.post("/products/:productId", (req, res, next) => {
  try {
    const params = req.params;
    console.log(params);
    const value = res.value.id;
    res.json({
      message: "sucessfully created",
      users: users,
    });
  } catch (error) {
    next(error);
  }
});

app.post("/register-user", (req, res) => {
  console.log(req.body);

  res.json({
    status: true,
    message: "Dummy User Registration API",
  });
});

// error handling middleware

// error handler middleware is used to avoid the repetation of the try/catch block in each api
// if anywhere in the code error occurs then we can call the next function with a value inside it - next(errror);
// it will skip all the middleware and goes to the error handler middleware
app.use(errorHandler);
app.listen(port, () => {
  console.log("listening on port No.", port);
});

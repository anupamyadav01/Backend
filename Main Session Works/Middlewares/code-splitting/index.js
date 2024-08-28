import express from "express";
import {
  errorHandler,
  middleware1,
  middleware2,
  middleware3,
} from "./middlewaers.js";

import { productsRouter } from "./productsApi.js";
import { usersRouter } from "./userAPI.js";
import { cartRouter } from "./cartAPI.js";

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

app.use(express.json());
app.use(express.static("images"));

// api endpints
app.use(productsRouter);
app.use(usersRouter);
app.use(cartRouter);
app.use(errorHandler);
app.listen(port, () => {
  console.log("listening on port No.", port);
});

import express from "express";
const userRouter = express.Router();

userRouter.get("/users", (req, res, next) => {
  // our api's are conditional middleware
  //   like- /users, /products
  try {
    console.log("Users GET api called");
    res.json(users);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/register-user", (req, res) => {
  console.log(req.body);

  res.json({
    status: true,
    message: "Dummy User Registration API",
  });
});

module.exports = userRouter;

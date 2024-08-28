import express from "express";
const productsRouter = express.Router();

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

app.get("/products", (req, res) => {});

module.exports = productsRouter;

import express from "express";

const cartRouter = express.Router();

cartRouter.get("/cart/add-to-cart", (req, res) => {});

cartRouter.delete("/cart/remove-from-cart", (req, res) => {});

module.exports = cartRouter;

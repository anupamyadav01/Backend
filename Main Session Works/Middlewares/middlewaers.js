export const middleware1 = (req, res, next) => {
  console.log("Middleware 1 called");
  console.log(req.query);

  if (req.query.apiKey === "123456") {
    next();
  } else {
    res.status(403).json({ status: false, message: "Please pass API key" });
  }
};
export const middleware2 = (req, res, next) => {
  console.log("Middleware2 called");
  next();
};
export const middleware3 = (req, res, next) => {
  console.log("Middleware3 claaed");
  next();
};

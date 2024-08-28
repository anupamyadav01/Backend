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
  const { firstName, lastName } = req.query;
  const fullName = `${firstName} ${lastName}`;

  // sending data using req
  req.fullName = fullName;

  next();
};
export const middleware3 = (req, res, next) => {
  console.log("Middleware3 claaed");
  console.log(req.fullName);

  next();
};

export const errorHandler = (error, req, res, next) => {
  console.log("ERROR OCCURRED IN SYSTEM");
  res.status(500).json({
    status: false,
    message: "Something went wrong, Please try again later",
  });
};

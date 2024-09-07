export const requestLogger = (req, res, next) => {
  console.log("Request Logger called!!");

  const method = req.method;
  const url = req.url;
  const ip = req.ip;
  const timestamp = new Date().toString();

  console.log(
    `Timestamp: ${timestamp},
Request Method: ${method}
Requested URL: ${url}
IP address: ${ip}`
  );

  next();
};

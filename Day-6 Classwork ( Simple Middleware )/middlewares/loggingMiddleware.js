const loggingMiddleware = (req, res, next) => {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${req.method} ${req.url} - Request received`);

  res.on("finish", () => {
    const endTime = Date.now();
    const processingTime = endTime - startTime;
    console.log(
      `[${timestamp}] ${req.method} ${req.url} - Request processed in ${processingTime}ms by Anupam Yadav`
    );
  });

  next();
};

export default loggingMiddleware;

export const handleError = (error, req, res, next) => {
  console.log("Error handler middleware called");

  res.status(500).json({
    status: "failed",
    message: error.message,
  });
};

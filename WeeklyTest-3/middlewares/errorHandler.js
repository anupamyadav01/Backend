export const handleError = (error, req, res, next) => {
  console.log("errrorhandler callled");
  res.status(500).json({ error: error.message });
};

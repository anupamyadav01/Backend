export const validatePhoneNumber = (req, res, next) => {
  const { phoneNumber } = req.body;
  console.log(phoneNumber);
};

const customResponse = (res, statusCode, data) => {
  res.status(statusCode).send({
    error: false,
    data,
  });
};

module.exports = { customResponse };

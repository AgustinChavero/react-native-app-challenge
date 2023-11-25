const customError = (reply, statusCode, message) => {
  reply.code(statusCode).send({
    error: true,
    message: message,
  });
};

const errorHandler = (error, req, reply) => {
  const { statusCode, message } = error;
  customError(reply, statusCode || 500, message || "Internal Server Error");
};

module.exports = { customError, errorHandler };

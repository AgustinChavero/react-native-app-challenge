const catchedAsync = (fn) => {
  return (req, reply) => {
    fn(req, reply).catch((err) => {
      reply.send(err);
    });
  };
};

module.exports = { catchedAsync };

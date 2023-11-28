const { postInvoice, getInvoice, getAllInvoice } = require("./invoice-controller");

async function invoiceRoute(fastify) {
  fastify.post("/", postInvoice);
  fastify.get("/", getAllInvoice);
  fastify.get("/:id", getInvoice);
}

module.exports = invoiceRoute;

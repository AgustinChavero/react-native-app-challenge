const { postInvoice, getInvoice, getAllInvoice } = require("./invoice-controller");

async function invoiceRoute(fastify) {
  fastify.post("/invoice", postInvoice);
  fastify.get("/invoice", getAllInvoice);
  fastify.get("/invoice/:id", getInvoice);
}

module.exports = invoiceRoute;

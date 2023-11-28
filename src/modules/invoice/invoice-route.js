const { postInvoice, getInvoice, getAllInvoice } = require("./invoice-controller");

async function invoiceRoute(fastify) {
  fastify.post("/api/invoice", postInvoice);
  fastify.get("/api/invoice", getAllInvoice);
  fastify.get("/api/invoice/:id", getInvoice);
}

module.exports = invoiceRoute;

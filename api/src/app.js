const fastify = require("fastify");
const { errorHandler } = require("./services/errors/custom-error");

const discountRoute = require("./modules/discount/discount-route");
const invoiceRoute = require("./modules/invoice/invoice-route");
const productRoute = require("./modules/product/product-route");
const storeRoute = require("./modules/store/store-route");
const userRoute = require("./modules/user/user-route");

const app = fastify({ logger: true });

app.register(discountRoute, { prefix: "/discount" });
app.register(invoiceRoute, { prefix: "/invoice" });
app.register(productRoute, { prefix: "/product" });
app.register(storeRoute, { prefix: "/store" });
app.register(userRoute, { prefix: "/user" });

app.get("/", async (request, reply) => {
  return reply.send({
    code: 200,
    message: "success",
    body: {
      error: false,
      data: {},
    },
  });
});

app.setErrorHandler(errorHandler);

module.exports = app;

const Discount = require("../discount/discount-model");

const createInvoice = async (body, model) => {
  let totalAmount = 0;

  for (const product of body.products) {
    if (product.in_discount) {
      const discount = await Discount.findById(product.discount_id);
      if (!discount.is_deleted) {
        const percentage = discount.percentage || 0;
        const discountAmount = (product.price * percentage) / 100;
        product.price -= discountAmount;
      } else {
        continue;
      }
    }
    totalAmount += product.price;
  }

  body.amount = totalAmount;

  const newInvoice = await model.create(body);

  return newInvoice;
};

module.exports = { createInvoice };

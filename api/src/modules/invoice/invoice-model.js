const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    store_id: {
      type: String,
      default: "",
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    products: [
      {
        type: Object,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;

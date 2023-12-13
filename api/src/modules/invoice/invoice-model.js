const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    store_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    buyer_dni: {
      type: String,
      required: true,
    },
    buyer_name: {
      type: String,
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

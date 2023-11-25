const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    store_id: {
      type: String,
      default: "",
    },
    discount_id: {
      type: String,
      default: "",
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity_sold: {
      type: Number,
      default: 0,
    },
    qualification: {
      type: Number,
      default: 0,
    },
    in_discount: {
      type: Boolean,
      default: false,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["2x1", "3x2", "5%", "10%", "15%", "20%", "25%", "30%", "40%", "50%"],
      trim: true,
    },
    percentage: {
      type: Number,
      default: 0,
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

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // filename: String,
    default: "https://unsplash.com/photos/pink-flower-cNGUw-CEsp0",
    set: (v) =>
      v === "" ? "https://unsplash.com/photos/pink-flower-cNGUw-CEsp0" : v,
  },
  category: {
    type: String,
    enum: [
      "Make Up",
      "Skin Care",
      "Hair Care",
      "Personal Care",
      "Bath & Body",
      "Health & Hygiene",
      "Mom & Baby",
      "Men",
      "Appliances",
      "Fragrance",
      "Accessories",
      "Natural",
    ],
    required: true,
  },

  discountedprice: {
    type: Number,
    required: true,
  },

  offer: String,

  originalprice: {
    type: Number,
    required: true,
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

productSchema.post("findOneAndDelete", async (product) => {
  if (product) {
    await Review.deleteMany({ _id: { $in: product.reviews } });
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

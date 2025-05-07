const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Product = require("../models/product.js");

//categories
//not required

//category
router.get(
  "/:category",
  wrapAsync(async (req, res) => {
    let { category } = req.params;
    const categories = await Product.distinct("category");
    const products = await Product.find({ category });
    res.render("directs/category.ejs", {
      categories,
      products,
      selectedCategory: category,
    });
  })
);

module.exports = router;

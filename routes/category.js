const express = require("express");
const router = express.Router();

//app crashes if not required
const wrapAsync = require("../utils/wrapAsync");

const Product = require("../models/product.js");

//read- get request- all categories-- /categories
//categories
//not required

//read- get request- single category-- /categories/:category
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
      selectedCategory: category, // getting category of categories without categories.ejs
      // by assigning value coming from {category} in selectedCategory variable
      // another name could be selectedFilter variable name
    });
  })
);

module.exports = router;

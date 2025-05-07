const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Product = require("../models/product.js");

//brands
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const brands = await Product.distinct("brand"); //distinct method
    res.render("directs/brands.ejs", { brands });
  })
);

//brand
router.get(
  "/:brand",
  wrapAsync(async (req, res) => {
    let { brand } = req.params; //extract
    const brands = await Product.distinct("brand"); //distinct method then find (by what)
    const products = await Product.find({ brand });
    res.render("directs/brand.ejs", { brand, products });
  })
);

module.exports = router;

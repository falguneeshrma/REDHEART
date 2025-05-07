const express = require("express");
const router = express.Router();

//app crashes if not required
const wrapAsync = require("../utils/wrapAsync");

const Product = require("../models/product.js");

//read- get request- all brands-- /brands
//brands
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const brands = await Product.distinct("brand"); //distinct method
    res.render("directs/brands.ejs", { brands });
  })
);

//read- get request- single brand-- /brands/:brand
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

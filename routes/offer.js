const express = require("express");
const router = express.Router();

//app crashes if not required
const wrapAsync = require("../utils/wrapAsync");

const Product = require("../models/product.js");

//offers
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const offers = await Product.distinct("offer");
    res.render("directs/offers.ejs", { offers });
  })
);

//offer
router.get(
  "/:offer",
  wrapAsync(async (req, res) => {
    let { offer } = req.params;
    const offers = await Product.distinct("offer");
    const products = await Product.find({ offer });
    res.render("directs/offer.ejs", { products, offer, encodeURIComponent });
  })
);

module.exports = router;

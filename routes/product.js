const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const Product = require("../models/product.js");
const { productSchema } = require("../schema.js");
const validateProduct = (req, res, next) => {
  let { error } = productSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, result.errMsg);
  } else {
    next();
  }
};

//1.Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allProducts = await Product.find({});
    res.render("products/index.ejs", { allProducts });
  })
);

//4.Create Route
router.post(
  "/",
  validateProduct,
  wrapAsync(async (req, res) => {
    let product = req.body.product;
    const newProduct = new Product(product);
    await newProduct.save();
    req.flash("success", "New Product added!");
    res.redirect("/products");
  })
);

//3.New Route
router.get("/products/new", (req, res) => {
  res.render("products/new.ejs");
});

//2.Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;

    const product = await Product.findById(id).populate("reviews");
    res.render("products/show.ejs", { product });
  })
);

//5.Edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit.ejs", { product });
  })
);

//6.Update Route
router.put(
  "/:id",
  validateProduct,
  wrapAsync(async (req, res) => {
    let { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body.product },
      { new: true }
    );
    res.redirect(`/products/${id}`);
  })
);

//7.Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.redirect("/products");
  })
);

module.exports = router;

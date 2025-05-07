const express = require("express");
const router = express.Router();
//app crashes if not required
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const Product = require("../models/product.js");
const { productSchema } = require("../schema.js"); // Joi-validate listings from backend

//function for Joi - MIDDLEWARE - to validate product listings from backend
const validateProduct = (req, res, next) => {
  let { error } = productSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, result.errMsg);
  } else {
    next();
  }
};

//read- get request- all posts-- /products
//1.Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allProducts = await Product.find({});
    res.render("products/index.ejs", { allProducts });
  })
);

//create- post request- to send form to server-- /products
//4.Create Route
router.post(
  "/",
  validateProduct,
  wrapAsync(async (req, res) => {
    // let {title, brand, image, description, category, originalprice, discountedprice, offer} = req.body;
    let product = req.body.product;
    const newProduct = new Product(product);
    await newProduct.save();
    res.redirect("/products");
  })
);

//create- get request- to render form to client-- /products/new
//3.New Route
router.get("/products/new", (req, res) => {
  res.render("products/new.ejs");
});

//read- get request- single post-- /products/:id
//2.Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    // When one schema references another — like Product having an array of Review IDs — you use .populate() to fetch the actual review documents instead of just getting the ObjectIds.
    const product = await Product.findById(id).populate("reviews");
    res.render("products/show.ejs", { product });
  })
);

//update- get request- to render form to client-- /products/:id/edit
//5.Edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit.ejs", { product });
  })
);

//update- post override patch request- to send form to server--  /products/:id
//6.Update Route
router.put(
  "/:id",
  validateProduct,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    //findByIdAndUpdate requires two args => Product.findByIdAndUpdate(id, updateData (-data to be updated))
    //By default, findByIdAndUpdate(id, updateData) returns the old document before the update. If you want the updated document, you need to explicitly set { new: true }.
    // The spread operator (...) is used to extract all key-value pairs from an object and create a shallow copy.
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body.product },
      { new: true }
    );
    res.redirect(`/products/${id}`);
  })
);

//delete- post override delete request- single post-- /products/:id
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

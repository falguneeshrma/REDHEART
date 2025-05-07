const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const Product = require("../models/product.js");
const Review = require("../models/review.js");
const { productSchema, reviewSchema } = require("../schema.js");
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, result.errMsg);
  } else {
    next();
  }
};

//create - create review
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let product = await Product.findById(req.params.id);
    let newReview = new Review(req.body.review);

    product.reviews.push(newReview._id);

    await newReview.save();
    await product.save();

    res.redirect(`/products/${product._id}`);
  })
);

//delete - delete review
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/products/${id}`);
  })
);

module.exports = router;

const express = require("express");
const router = express.Router({ mergeParams: true });
//Express does NOT automatically pass :id into your nested router’s req.params, unless you explicitly allow it.
//after mergeParams: true
//Now req.params.id inside your POST and DELETE routes actually gives you the real product ID from the URL — not undefined as accessed from parent route.

//app crashes if not required
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const Product = require("../models/product.js");
const Review = require("../models/review.js");
const { productSchema, reviewSchema } = require("../schema.js"); // Joi-validate listings from backend
//function for Joi - MIDDLEWARE - to validate product reviews from backend
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, result.errMsg);
  } else {
    next();
  }
};

//read- get request - to read all reviews on separate page - no need - reviews seen on show page only

//create - post request - one review - /products/:id/reviews
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

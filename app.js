//search functionality
//one line offers same type eliminate save rs offers
//one line product name keep 3 letter name exact
//isAdmin middleware
//offer= elite choice

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.js");
const Review = require("./models/review.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { productSchema, reviewSchema } = require("./schema.js"); // Joi-validate listings from backend

//basic connection code
const MONGO_URL = "mongodb://127.0.0.1:27017/redheart";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

//PRODUCT MODEL

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

//homepage
app.get("/", (req, res) => {
  res.render("directs/homepage.ejs");
});

//read- get request- all posts-- /products
//1.Index Route
app.get(
  "/products",
  wrapAsync(async (req, res) => {
    const allProducts = await Product.find({});
    res.render("products/index.ejs", { allProducts });
  })
);

//create- post request- to send form to server-- /products
//4.Create Route
app.post(
  "/products",
  validateProduct,
  wrapAsync(async (req, res) => {
    // let {title, brand, image, description, category, originalprice, discountedprice, offer} = req.body;
    let product = req.body.product;
    const newProduct = new Product(product);
    await newProduct.save();
    res.redirect("/products");
  })
);

//read- get request- all brands-- /brands
//brands
app.get(
  "/brands",
  wrapAsync(async (req, res) => {
    const brands = await Product.distinct("brand"); //distinct method
    res.render("directs/brands.ejs", { brands });
  })
);

//read- get request- single brand-- /brands/:brand
//brand
app.get(
  "/brands/:brand",
  wrapAsync(async (req, res) => {
    let { brand } = req.params; //extract
    const brands = await Product.distinct("brand"); //distinct method then find (by what)
    const products = await Product.find({ brand });
    res.render("directs/brand.ejs", { brand, products });
  })
);

//read- get request- all categories-- /categories
//categories
//not required

//read- get request- single category-- /categories/:category
//category
app.get(
  "/categories/:category",
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

//offers
app.get(
  "/offers",
  wrapAsync(async (req, res) => {
    const offers = await Product.distinct("offer");
    res.render("directs/offers.ejs", { offers });
  })
);

//offer
app.get(
  "/offers/:offer",
  wrapAsync(async (req, res) => {
    let { offer } = req.params;
    const offers = await Product.distinct("offer");
    const products = await Product.find({ offer });
    res.render("directs/offer.ejs", { products, offer, encodeURIComponent });
  })
);

//create- get request- to render form to client-- /products/new
//3.New Route
app.get("/products/new", (req, res) => {
  res.render("products/new.ejs");
});

//read- get request- single post-- /products/:id
//2.Show Route
app.get(
  "/products/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    // When one schema references another — like Product having an array of Review IDs — you use .populate() to fetch the actual review documents instead of just getting the ObjectIds.
    const product = await Product.findById(id).populate("reviews");
    res.render("products/show.ejs", { product });
  })
);

//update- get request- to render form to client-- /products/:id/edit
//5.Edit Route
app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit.ejs", { product });
  })
);

//update- post override patch request- to send form to server--  /products/:id
//6.Update Route
app.put(
  "/products/:id",
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
app.delete(
  "/products/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.redirect("/products");
  })
);

//REVIEWS MODEL

//read- get request - to read all reviews on separate page - no need - reviews seen on show page only

//create - post request - one review - /products/:id/reviews
app.post(
  "/products/:id/reviews",
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
app.delete(
  "/products/:id/reviews/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/products/${id}`);
  })
);

//testing product creating product with product schema
// app.get("/testProduct", async (req, res) => {
//   const sampleProduct = new Product({
//     title: "Dove Cream Beauty Bathing Bar",
//     description: "100 g",
//     image: "https://unsplash.com/photos/pink-flower-cNGUw-CEsp0",
//     category: "Bath & Body",
//     price: 63,
//   });
//   await sampleProduct.save();
//   res.send("Successful Testing");
// });

//page not found - random page - MIDDLEWARE
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

//Express error with staus code and message - MIDDLEWARE
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong..." } = err;
  //error.ejs contains alerts
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});

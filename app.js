const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const flash = require("connect-flash");

const session = require("express-session");
const sessionOptions = {
  secret: "redheart",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 3,
    maxAge: 1000 * 60 * 60 * 24 * 3,
    httpOnly: true,
  },
};

const ExpressError = require("./utils/ExpressError.js");

const products = require("./routes/product.js");
const brands = require("./routes/brand.js");
const offers = require("./routes/offer.js");
const categories = require("./routes/category.js");
const reviews = require("./routes/review.js");

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

//PRODUCTS MODEL

//homepage
app.get("/", (req, res) => {
  res.render("directs/homepage.ejs");
});

//before all routes
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
});

//router brand
app.use("/brands", brands);

//router category
app.use("/categories", categories);

//router offer
app.use("/offers", offers);

//router prouduct
app.use("/products", products);

//REVIEWS MODEL

app.use("/products/:id/reviews", reviews);

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

//page not found
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

//Express error with staus code and message
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong..." } = err;
  //error.ejs contains alerts
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});

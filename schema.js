//Joi npm i joi
// require in app.js
//create joi schema
//schema validate func
//middleware

const Joi = require("joi");

module.exports.productSchema = Joi.object({
  product: Joi.object({
    title: Joi.string().required(),
    brand: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null),
    category: Joi.string()
      .valid(
        "Make Up",
        "Skin Care",
        "Hair Care",
        "Personal Care",
        "Bath & Body",
        "Health & Hygiene",
        "Mom & Baby",
        "Men",
        "Appliances",
        "Fragrance",
        "Accessories",
        "Natural"
      )
      .required(),
    discountedprice: Joi.number().required().min(0),
    originalprice: Joi.number().required().min(0),
    offer: Joi.string().required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }),
}).required();

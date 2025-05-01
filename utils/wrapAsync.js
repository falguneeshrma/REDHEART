// function wrapAsync(fn) {
//   return function (req, res, next) {
//     fn(req, res, next).catch((err) => next(err));
//   };
// }
//require in app.js

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

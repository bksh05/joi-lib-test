const Joi = require("joi");

const book = Joi.object({
  bookName: Joi.string().required(),
  totalPage: Joi.number().required(),
  author: Joi.string().required(),
  genre: Joi.array().items(Joi.string()).required(),
  reviews: Joi.array()
    .items(
      Joi.object({
        userName: Joi.string().required(),
        comment: Joi.string().required(),
      })
    )
    .required(),
});


module.exports = book;
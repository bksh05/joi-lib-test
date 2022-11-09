const Joi = require("joi");

// The author object shared in google meet was lost at the end of the call.

const author = Joi.object({
  authorName: Joi.string().required(),
  age: Joi.number().required(),
  about: Joi.string().required(),
});

module.exports = author;

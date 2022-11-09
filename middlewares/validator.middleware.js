const validators = require("../validators/index");

const validator = (schemaName) => {
  if (!validators[schemaName]) {
    throw new Error(`${schemaName} does not exists`);
  }

  return async function (req, res, next) {
    try {
      const validated = await validators[schemaName].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
};

module.exports = validator;
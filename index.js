const express = require("express");
const validator = require("./middlewares/validator.middleware");

const app = express();
app.use(express.json());

app.post("/books", validator("book"), (req, res) => {
  const body = req.body;
  res.json("Book Added");
});

app.post("/authors", validator("author"), (req, res) => {
  const body = req.body;
  res.json("Author Added");
});

app.listen(3000, () => {
  console.log("App started");
});

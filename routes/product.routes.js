const express = require("express");
const router = express.Router();
const ProductModel = require("../models/product.model");

router.get("/", (req, res) => {
  ProductModel.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({message: 'Server Error'})
  })
});

module.exports = router;

const express = require("express");
const router = express.Router();
const ProductModel = require("../models/product.model");

router.get("/products", (req, res) => {
  console.log('req.body GET', req.body)
  ProductModel.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

/* req.params { id: '601bc4ee27cdf74cf4468064' }
server always returns db-id */
router.get("/products/:id", (req, res) => {
  ProductModel.findById(req.params.id)
    .then((response) => {
      console.log("req.paramsGET", req.params);
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.patch("/products/:id", (req, res) => {
  let id = req.params.id
  console.log("req.paramsPATCH", req.params);
  console.log("req.params.id", req.params.id);
  console.log('req.body1', req.body)
 
  console.log('req.body2', req.body)
  console.log('req.body.item.nrOfItems -1', req.body.nrOfItems - 1)

  
  ProductModel.findByIdAndUpdate(id, {
    $set: { nrOfItems: req.body.nrOfItems},
  })
    .then((response) => {
      res.status(200).json(response);
      console.log('edited')
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});


/* router.patch("/products", (req, res) => {
  
  console.log('req.body', req.body)
  let item = req.body.products.map((item) => {
    return item.nrOfItems
  })
  console.log('req.body.products', req.body.products)
  console.log('item', item)
  let updatedProducts = req.body.products
  ProductModel.updateMany({}, {$set: [item.map((prod) => prod)]})
    .then((response) => {
      res.status(200).json(response);
      console.log('response is:', response)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
}); */

module.exports = router;

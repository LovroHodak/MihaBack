const express = require("express");
const router = express.Router();
const ProductModel = require("../models/product.model");

router.get("/products", (req, res) => {
  ProductModel.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({message: 'Server Error'})
  })
});

/* req.params { id: '601bc4ee27cdf74cf4468064' }
server return db-id */
router.get('/products/:id', (req, res) => {
  ProductModel.findById(req.params.id)
   .then((response) => {
     console.log('req.params', req.params)
        res.status(200).json(response)
   })
   .catch((err) => {
        res.status(500).json({
             error: 'Something went wrong',
             message: err
        })
   }) 
})

module.exports = router;

const express = require("express");

const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {

    const products = await Product.find();

    res.json(products);

});

router.get("/:id", async (req, res) => {

    const product =
        await Product.findById(req.params.id);

    res.json(product);

});

router.post("/", async (req, res) => {

    console.log(req.body);

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });

    await product.save();

    res.json(product);

});

module.exports = router;
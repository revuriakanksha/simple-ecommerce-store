const express = require("express");

const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {

    const order = new Order({

        products: req.body.products,

        totalAmount: req.body.totalAmount

    });

    await order.save();

    res.json({
        message: "Order Placed Successfully",
        order
    });

});

module.exports = router;
const express = require('express');
const router = express.Router();
const productData = require('./../controllers/product.ctrl');

router.get('/', (req, res, next) => {
    res.status(200).json({
        data: productData.products
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    const picked = productData.getProductById(id);

    res.status(200).json({
        data: picked
    });
})

module.exports = router;
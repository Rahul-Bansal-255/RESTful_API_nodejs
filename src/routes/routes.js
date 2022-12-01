const express = require('express');
const controller = require('../controller/controllerLayer');

const router = express.Router();

// get all items
router.get('/', controller.getAllItems);

// get single item
router.get('/:id', controller.getSingleItem);

// add item
router.post('/', controller.addItem);

// delete item
router.delete('/:id', controller.deleteItem);

// update item
router.patch('/:id', controller.updateItem);


module.exports = router;
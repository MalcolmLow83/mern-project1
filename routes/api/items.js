const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get('/', (req, res) => {
    Item
        .find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create a Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({ //new item refers to model schema
        name: req.body.name
    });
    newItem
        .save()
        .then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete a Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({delete: true})))
        .catch(err => res.status(404).json({delete: false}));
});

module.exports = router;
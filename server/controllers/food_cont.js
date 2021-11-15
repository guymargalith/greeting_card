const express = require('express');
const router = express.Router();

const Food = require('../models/food_mod');

router.get('/', (req, res) => {
    const foodsData = Food.all;
    res.send(foodsData);
});

router.get('/:name', (req, res) => {
    try{
        const selectedFood = Food.findByName(req.params.name);
        res.send(selectedFood);
    } catch(err) {
        console.log(err);
        res.status(404).send(err);
    };
})

router.post("/", (req, res) => {
    const data = req.body;
    const newFood = Food.create(data);
    res.status(201).send(newFood);
});

module.exports = router;
const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())

app.use(cors());

const foodRoute = require('./controllers/food_cont');

app.use('/foods', foodRoute);

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

module.exports = app;
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());

const environment = process.env.NODE_ENV || 'production';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 10000);
app.locals.title = "Mix Master API";

app.get('/', (request, response) => {
    response.send("Thirsty? Let's find a drink");
});

app.get('/api/v1/drinks', async (request, response) => {
    try {
        const drinks = await database('beverages').select();
        response.status(200).json(drinks);
    } catch(error) {
        response.status(500).json({error});
    }
});

app.get('/api/v1/drinks/:id', async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const drinks = await database('beverages').select();
        const targetDrink = drinks.filter((drink) => {
            return drink.id === id
        })
        response.status(200).json(targetDrink);
    } catch(error) {
        response.status(500).json({error});
    }
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
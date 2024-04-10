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

app.patch('/api/v1/drinks/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const changes = request.body;
    try {
        const updatedCount = await database('beverages').where("id", id).update(changes);
        if (updatedCount > 0) {
            response.status(200).json({ message: "Record updated successfully" });
        } else {
            response.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Error updating record", error: error.message });
    }
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
# Mix Master API

This application is the back-end server for the [Mix Master](https://github.com/lalonggone/mix-master-fe) front end React application. 

## Technologies Used
<div>
    <img src='https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white' alt='express'/>
    <img src='https://img.shields.io/badge/Knex.js-D26B38.svg?style=for-the-badge&logo=knexdotjs&logoColor=white' alt='knex'/>
    <img src='https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white' alt='aws'/>
</div>

## Getting Started

Please note: it is important that for personal use or exploration into this API, you set your configurations to utilize the development environment in `knexfile.js` along with your own
local Postgres database!

This is due to the fact that migrations and seeds run through the production environment will impact the real data used by the front end application and AWS RDS Postgres database.

### Installation

1. Clone down this repository.
    - `git clone git@github.com:dkwon1223/mix-master-api.git`
2. Change into the new directory.
    - `cd mix-master-api`
3. Install the dependencies.
    - `npm install`


### Usage

1. To fire up the server, run `node server.js` OR `nodemon server.js`.

### Endpoints for Local Server

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:10000/api/v1/drinks` | GET | not needed | Array of all existing reservations: `[{ id: 5, name: 'Campari Orange', ingredients: {...}, directions: {...}, alcoholic: true, isFavorite: false, image: <url> created_at: <dateString>, updated_at: <dateString> }, {<moreDrinkObjects>}, ...]` |
| `http://localhost:10000/api/v1/drinks/:id` | GET | not needed | Single Drink(by id): `{ id: 5, name: 'Campari Orange', ingredients: {...}, directions: {...}, alcoholic: true, isFavorite: false, image: <url> created_at: <dateString>, updated_at: <dateString> }` |


### Endpoints for Deployed Server(used in the front end application)

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `https://mix-master-api.onrender.com/api/v1/drinks` | GET | not needed | Array of all existing reservations: `[{ id: 5, name: 'Campari Orange', ingredients: {...}, directions: {...}, alcoholic: true, isFavorite: false, image: <url> created_at: <dateString>, updated_at: <dateString> }, {<moreDrinkObjects>}, ...]` |
| `https://mix-master-api.onrender.com/api/v1/drinks/:id` | GET | not needed | Single Drink(by id): `{ id: 5, name: 'Campari Orange', ingredients: {...}, directions: {...}, alcoholic: true, isFavorite: false, image: <url> created_at: <dateString>, updated_at: <dateString> }` |

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const beveragesData = require('../datasets/beveragesData');


  // Deletes ALL existing entries
exports.seed = async function(knex) {
  try {
    await knex('beverages').del();
    // const beverage1 = await knex('beverages').insert(
    //   {
    //       name: "Old Fashioned",
    //       ingredients: ["simple syrup", "water", "bitters", "bourbon", "orange garnish", "ice"],
    //       alcoholic: true
    //   }
    // );
    // const beverage2 = await knex('beverages').insert(
    //   {
    //     name: "Mocktail Mojito",
    //     ingredients: ["mint leaves", "limes", "agave syrup", "club soda", "ice"],
    //     alcoholic: false
    //   }
    // );
    // const beverage3 = await knex('beverages').insert(
    //   {
    //     name: "Cosmopolitan",
    //     ingredients: ["vodka", "Cointreau", "cranberry juice", "lime"],
    //     alcoholic: true
    //   }
    // );
    const createBeverage = async (knex, beverage) => {
      const singleBeverage = await knex('beverages').insert({
        name: beverage.name,
        ingredients: beverage.ingredients,
        directions: beverage.directions,
        alcoholic: beverage.alcoholic,
        isFavorite: beverage.isFavorite,
        image: beverage.image
      }, 'id');
    }
    let bevs = beveragesData.map((beverage) => {
      return createBeverage(knex, beverage);
    });

    return Promise.all(bevs);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
  
}

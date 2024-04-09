/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema 
    .createTable('beverages', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.specificType('ingredients', 'text ARRAY').notNullable();
        table.specificType('directions', 'OBJECT').notNullable();
        table.boolean('alcoholic').notNullable();
        table.string('imageURL').notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('beverages');
};

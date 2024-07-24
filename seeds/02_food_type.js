/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'kibbles n bits', description: 'its not good but it gets the job done for this to do'},
    {id: 2, name: 'kibbles n bits', description: 'its not good but it gets the job done for this to do'},
    {id: 3, name: 'kibbles n bits', description: 'its not good but it gets the job done for this to do'}

  ]);
};

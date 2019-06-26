
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', (table) => {
      table.increments('id').primary();
      table.string('team');
      table.string('conference');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('players', (table) => {
      table.increments('id').primary();
      table.integer('team_id').unsigned();
      table.foreign('team_id')
        .references('teams.id') 
      table.string('name');
      table.string('school');
      table.string('position');

      table.timestamp(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players'),
    knex.schema.dropTable('teams')
  ])
};

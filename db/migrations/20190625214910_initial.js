
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', (table) => {
      
    })
  ])
};

exports.down = function(knex, Promise) {
  
};

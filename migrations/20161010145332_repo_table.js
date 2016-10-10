var knex = require('knex');

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('repos', function (table) {
      table.increments()
      table.string('repo_name')
      table.string('username')
      table.integer('stargazers')
      table.timestamps()
    })
  ])

};

exports.down = function(knex, Promise) {
  Promise.all([knex.schema.dropTable('repos')])
};

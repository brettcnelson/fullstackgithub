var knex = require('knex');

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('repos', function (table) {
      table.integer('id').unique()
      table.string('url')
      table.string('username')
      table.string('repo_name')
      table.integer('stargazers')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([knex.schema.dropTable('repos')])
};

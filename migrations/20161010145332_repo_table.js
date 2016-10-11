var knex = require('knex');

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('repos', function (table) {
      table.integer('id')
      table.string('url')
      table.string('username')
      table.string('repo_name')
      table.integer('stargazers')
      table.unique('id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('repos')])
};

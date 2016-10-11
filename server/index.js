var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var knex = require('knex');


var app = express();
module.exports = app;

app.use( bodyParser.json() );


var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './github-fetcher.sqlite3'
  }
});


app.post('/repos/import', function (req, res) {
  // TODO
  req.body.forEach(function(repo) {
    knex('repos').insert({id: repo.id, url: repo.svn_url, username: repo.user, repo_name: repo.name, stargazers: repo.stargazers_count})
    .then(function(result) {
      res.json({success: true, message: 'ok'})
    });
  })
});


app.get('/repos', function (req, res) {
  // TODO



});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
});

var port = process.env.PORT || 4040;
app.listen(port);
console.log("Listening on port " + port);

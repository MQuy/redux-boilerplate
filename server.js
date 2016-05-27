var express = require("express");
var app = express();
var cors = require('cors');
var path = require("path");
var users = [
  {id: 1, email: 'admin@example.com', full_name: 'Admin', authentication_token: 'xxx', avatar_url: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'},
  {id: 2, email: 'user@example.com', full_name: 'User', authentication_token: 'xxx', avatar_url: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'},
];

app.use(express.static('dist'));
app.use(cors());
app.set('port', (process.env.PORT || 3000));

app.post('/users/sign_in', function(req, res) {
  res.json(users[0]);
});

app.get('/users/me', function(req, res) {
  res.json(users[1]);
});

app.get('/users/:id', function(req, res) {
  res.json(users[0]);
});

app.get('/users', function(req, res) {
  res.json(users);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})

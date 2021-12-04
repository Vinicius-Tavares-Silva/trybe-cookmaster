const express = require('express');
const error = require('../../middlewares/error');
const recipes = require('../../controllers/recipes/router');
const users = require('../../controllers/users/router');

const app = express();
app.use(express.json());

app.use('/users', users);
app.use('/recipes', recipes);
app.use(error);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;

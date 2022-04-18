const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Ella Seri')
  });

  module.exports = routes;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const routes = require('express').Router();
const contacts = require('./contacts');

routes.use('/contacts', contacts);
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));


module.exports = routes;

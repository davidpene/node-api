const express = require('express');
const bodyParser = require('body-parser');
const boom = require('express-boom');

const configureRoutes = require('./routes').configureRoutes;
const handlers = require('./handlers');

module.exports = (port) => {
  return new Promise(resolve => {

    const app = express();

    // use body-parser middleware; allows subsequent middleware to access body
    app.use(bodyParser.json());

    // use Boom library from Hapi for good validation error messages
    app.use(boom());

    // configure custom routes
    configureRoutes(app, handlers);

    // start
    app.listen(port, resolve);

  });
};

const validate = require('express-validation');

const configureRoutes = (app, handlers) => {

  app.get('/', (req, res) => {
    res.send('The node-api is running :)');
  });

  app.get('/ping', (req, res) => {
    res.send('');
  });

  app.get('/healthcheck', (req, res) => {
    res.send('');
  });

  // example routes for a primary resource
  app.post('/users', validate(handlers.createUser.validate), handlers.createUser.handler);

  app.get('/users/:id', validate(handlers.getUser.validate), handlers.getUser.handler);

  app.put('/users/:id', validate(handlers.updateUser.validate), handlers.updateUser.handler);

  app.patch('/users/:id', validate(handlers.patchUser.validate), handlers.patchUser.handler);

  app.delete('/users/:id', validate(handlers.deleteUser.validate), handlers.deleteUser.handler);

  // example routes for a subresource
  app.get('/users/:id/documents', validate(handlers.getDocuments.validate), handlers.getDocuments.handler);
};

module.exports = {
  configureRoutes
};

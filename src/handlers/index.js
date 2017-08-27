const Joi = require('joi');

const store = require('../storage/store');

module.exports = {

  createUser: {
    validate: {
      body: {
        email: Joi.string().email().required()
      } 
    },
    handler(req, res) {
      const user = req.body;

      store.users.push(user);

      res.status(201).send(user);
    }
  },

  getUser: {
    validate: {
      params: {
        id: Joi.string().guid().required()
      }
    },
    handler(req, res) {
      const id = req.params.id;

      const user = store.users.find(user => user.id === id);

      res.send(user);
    }
  },

  updateUser: {
    validate: {
      params: {
        id: Joi.string().guid().required()
      },
      body: {
        email: Joi.string().email().required()
      } 
    },
    handler(req, res) {
      const id = req.params.id;

      const updatedUser = req.body;

      let userIdx = store.users.findIndex(user => user.id === id);

      store.users[userIdx] = { id: id, ...updatedUser };

      res.status(204).send();
    }
  },

  patchUser: {
    validate: {
      body: {
        email: Joi.string().email().optional()
      } 
    },
    handler(req, res) {
      const id = req.params.id;
      const updatedUser = req.body;

      const user = store.users.find(user => user.id === id);

      for(const propertyName in updatedUser) {
        if (user[propertyName]) {
          user[propertyName] = updatedUser[propertyName];
        }
      }

      res.status(204).send();
    }
  },

  deleteUser: {
    validate: {
      params: {
        id: Joi.string().guid().required()
      }
    },
    handler(req, res) {
      const id = req.params.id;

      store.users.splice(user => user.id === id);

      res.send();
    }
  },

  getDocuments: {
    validate: {
      params: {
        id: Joi.string().guid().required()
      }
    },
    handler(req, res) {
      const id = req.params.id;

      const user = store.users.find(user => user.id === id);

      res.send(user.documents);
    }
  },
};

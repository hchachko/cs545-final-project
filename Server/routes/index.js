const parksRoutes = require('./parks');

const constructorMethod = (app) => {
  app.use('/', parksRoutes);

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;

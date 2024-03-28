const express = require('express');

const moduleRouter = require('./module.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/modules', moduleRouter);
}

module.exports = routerApi;

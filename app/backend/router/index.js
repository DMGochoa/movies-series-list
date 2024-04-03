const express = require('express');

const moduleRouter = require('./module.router');
const actionRouter = require('./action.router');
const rolerRouter = require('./role.router');
const actionRoleRouter = require('./roleaction.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/modules', moduleRouter);
  router.use('/actions', actionRouter);
  router.use('/roles', rolerRouter);
  router.use('/roleactions', actionRoleRouter);
}

module.exports = routerApi;

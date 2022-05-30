import express from 'express';
import entityRouter from './entity';

const routes = (app: express.Application) => {
  app.use(entityRouter);
  return app;
};

export default routes;

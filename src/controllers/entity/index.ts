import { Router } from 'express';
import EntityController from './entityController';
import EntityValidator from '../../middleware/entity.validator';

const jobsRouter = Router();

jobsRouter.get(
    '/entity',
    EntityController.getAllEntities
);

jobsRouter.get(
    '/entity/:id',
    EntityValidator.validateIdParam,
    EntityController.getEntityById
);

export default jobsRouter;

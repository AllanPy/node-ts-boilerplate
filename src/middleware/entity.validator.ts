import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

class EntityValidator {
    //your validator methods here
    static validateIdParam(req: Request, res: Response, next: NextFunction) {
        const schema = joi.object().keys({
          id: joi.string().required().trim(),
        });
        const { error } = schema.validate(req.params);
        if (error) {
          const { details: errorDetails } = error;
          const { message } = errorDetails[0];
          return res.status(400).send({
            message: 'VALIDATION_ERROR',
            error: message
          });
        }
        return next();
      }
}

export default EntityValidator;

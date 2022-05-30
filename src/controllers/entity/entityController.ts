import { Request, Response } from 'express';
import EntityService from '../../service';

class EntityController {
    static async getAllEntities(request: Request, response: Response) {
        // entity controller logic
        const entities = await EntityService.getAllEntities(request, response);
        response.status(200).send(entities);
    }

    static async getEntityById(request: Request, response: Response) {}

    static async createEntity(request: Request, response: Response) {}

    static async updateEntity(request: Request, response: Response) {}

    static async deleteEntity(request: Request, response: Response) {}
}

export default EntityController;

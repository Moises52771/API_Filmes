import { Request, Response } from "express";
import { DeleteVdeoService } from "../services/DeleteVideoServices";


export class DeleteVideoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new DeleteVdeoService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}
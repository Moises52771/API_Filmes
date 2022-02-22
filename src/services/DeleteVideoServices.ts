import { getRepository } from "typeorm";
import { Video } from "../entities/Video";


export class DeleteVdeoService {
    async execute(id: string ): Promise<Video | Error> {
        const repo = getRepository(Video);

        if (!(repo.findOne(id))){
            return new Error("Video does not exists!");
        }

        await repo.delete(id);
    }
}
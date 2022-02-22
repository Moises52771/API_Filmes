import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";


type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
};

export class CreateVideoService {
    async execute({ name, description, duration, category_id }: VideoRequest): Promise<Video | Error> {
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);

        if (!(await repoCategory.findOne(category_id))) {
            return new Error("Category does not exists!");
        }
        else if (category_id == undefined) {
            return new Error("Need to add a category!");
        }
        else if (await repo.findOne({ name })){
            return new Error("The video already exists!");
        }

        const video = repo.create({ name, description, duration, category_id });

        await repo.save(video);

        return video;
    }
}
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCategoryDto } from "./dto/createCategory.dto";
import { CreateDishDto } from "./dto/createDish.dto";
import { ChangeCategoryDto } from "./dto/changeCategory.dto";
import { ChangeDishDto } from "./dto/ChangeDish.dto";


@Injectable()
export class MenuService {
    constructor(private prismaService: PrismaService) {}

    async getAllMenu() {
        try {
            const allMenu = await this.prismaService.categories.findMany({
                include: {
                    dish: true,
                }
            })

            return allMenu;
        } catch(err) {
            throw new Error(err.message);
        }
    }

    async createCategory(dto: CreateCategoryDto) {
        try {
            const createdCategory = await this.prismaService.categories.create({
                data: {
                    name: dto.name,
                    description: dto.description,
                    imageURL: dto.imageURL
                }
            })

            return createdCategory;
        } catch(err) {
            throw new Error(err.message);
        }
    }

    async createDish(dto: CreateDishDto) {
        try {
            const createDish = await this.prismaService.dishes.create({
                data: {
                    name: dto.name,
                    description: dto.description,
                    price: dto.price,
                    imageURL: dto.imageURL,
                    categoryId: dto.categoryId
                }
            })

            return createDish;
        } catch(err) {
            throw new Error(err.message)
        }
    }

    async deleteCategory(deleteCategoryId: string) {
        try {
            const deleteCategory = await this.prismaService.categories.delete({
                where: {
                    id: parseInt(deleteCategoryId)
                }
            })

            return deleteCategory
        } catch(err) { 
            throw new Error(err.message);
        }
    }

    async deleteDish(deleteDishId: string) {
        try {
            const deleteDish = await this.prismaService.dishes.delete({
                where: {
                    id: parseInt(deleteDishId)
                }
            })

            return deleteDish
        } catch(err) {
            throw new Error(err.message)
        }
    }

    async changeCategory(dto: ChangeCategoryDto, changeCategoryId: string) {
        try {
            const changeCategoryById = await this.prismaService.categories.update({
                where: {
                    id: parseInt(changeCategoryId)
                },
                data: {
                    ...dto,
                }
            })

            return changeCategoryById;
        } catch(err) {
            throw new Error(err.message);
        }
    }

    async changeDish(dto: ChangeDishDto, changeDishId: string) {
        try {
            const changeDishById = await this.prismaService.dishes.update({
                where: {
                    id: parseInt(changeDishId)
                },
                data: {
                    ...dto
                }
            })

            return changeDishById;
        } catch(err) {
            throw new Error(err.message);
        }
    }
    
}
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { CreateCategoryDto } from "./dto/createCategory.dto";
import { CreateDishDto } from "./dto/createDish.dto";
import { ChangeCategoryDto } from "./dto/changeCategory.dto";
import { ChangeDishDto } from "./dto/ChangeDish.dto";
import { ApiBody } from "@nestjs/swagger";


@Controller("admin")
export class MenuController {
    constructor(private menuService: MenuService) {}

    @Get("menu")
    getAllMenu(){
        return this.menuService.getAllMenu();
    }

    @ApiBody({type: [CreateCategoryDto]})
    @Post("category")
    createCategory(@Body() dto: CreateCategoryDto) {
        return this.menuService.createCategory(dto);
    }

    @ApiBody({type: [CreateDishDto]})
    @Post('dish')
    createDish(@Body() dto: CreateDishDto) {
        return this.menuService.createDish(dto);
    }

    @Delete("category/:deleteCategoryId")
    deleteCategoryById(@Param("deleteCategoryId") deleteCategoryId:string) {
        return this.menuService.deleteCategory(deleteCategoryId);
    }

    @Delete("dish/:deleteDishId")
    deleteDishId(@Param("deleteDishId") deleteDishId:string) {
        console.log(deleteDishId)
        return this.menuService.deleteDish(deleteDishId);
    }

    @ApiBody({type: [ChangeCategoryDto]})
    @Patch("category/:changeCategoryId")
    changeCategory(@Body() dto: ChangeCategoryDto, @Param("changeCategoryId") changeCategoryId: string) {
        return this.menuService.changeCategory(dto, changeCategoryId)
    }

    @ApiBody({type: [ChangeDishDto]})
    @Patch("dish/:changeDishId")
    changeDish(@Body() dto: ChangeDishDto, @Param("changeDishId") changeDishId: string) {
        return this.menuService.changeDish(dto, changeDishId);
    }
}

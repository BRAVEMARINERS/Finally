import { Controller, Get, Param, Query } from "@nestjs/common";
import { SeafarersService } from "./seafarers.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("seafarers")
export class SeafarersController { constructor(private readonly service: SeafarersService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }

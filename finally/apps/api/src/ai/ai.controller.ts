import { Controller, Get, Param, Query } from "@nestjs/common";
import { AiService } from "./ai.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("ai")
export class AiController { constructor(private readonly service: AiService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }

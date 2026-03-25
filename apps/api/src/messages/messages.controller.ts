import { Controller, Get, Param, Query } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("conversations")
export class MessagesController { constructor(private readonly service: MessagesService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }

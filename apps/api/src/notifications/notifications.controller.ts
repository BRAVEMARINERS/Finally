import { Controller, Get, Param, Query } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { PaginationQueryDto } from "../common/pagination/pagination-query.dto";
@Controller("notifications")
export class NotificationsController { constructor(private readonly service: NotificationsService) {} @Get() findAll(@Query() _q: PaginationQueryDto) { return this.service.findAll(); } @Get(":id") findOne(@Param("id") id: string) { return this.service.findOne(id); } }

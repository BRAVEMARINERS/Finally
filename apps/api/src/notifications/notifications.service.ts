import { Injectable } from "@nestjs/common";
@Injectable()
export class NotificationsService { findAll() { return { message: "notifications list placeholder" }; } findOne(id: string) { return { id, message: "notifications details placeholder" }; } }

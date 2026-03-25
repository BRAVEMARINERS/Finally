import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesService { findAll() { return { message: "messages list placeholder" }; } findOne(id: string) { return { id, message: "messages details placeholder" }; } }

import { Injectable } from "@nestjs/common";
@Injectable()
export class AiService { findAll() { return { message: "ai list placeholder" }; } findOne(id: string) { return { id, message: "ai details placeholder" }; } }

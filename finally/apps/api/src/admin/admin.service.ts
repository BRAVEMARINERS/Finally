import { Injectable } from "@nestjs/common";
@Injectable()
export class AdminService { findAll() { return { message: "admin list placeholder" }; } findOne(id: string) { return { id, message: "admin details placeholder" }; } }

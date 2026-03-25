import { Injectable } from "@nestjs/common";
@Injectable()
export class SeafarersService { findAll() { return { message: "seafarers list placeholder" }; } findOne(id: string) { return { id, message: "seafarers details placeholder" }; } }

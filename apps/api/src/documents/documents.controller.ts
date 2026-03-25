import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { DocumentsService } from "./documents.service";
import { CreateDocumentDto } from "./dto/create-document.dto";
@Controller("documents")
export class DocumentsController { constructor(private readonly documentsService: DocumentsService) {} @Get("me") listMine() { return this.documentsService.listMine(); } @Post("me") createMine(@Body() dto: CreateDocumentDto) { return this.documentsService.createMine(dto); } @Patch("me/:id") updateMine(@Param("id") id: string, @Body() dto: Partial<CreateDocumentDto>) { return this.documentsService.updateMine(id, dto); } @Delete("me/:id") deleteMine(@Param("id") id: string) { return this.documentsService.deleteMine(id); } }

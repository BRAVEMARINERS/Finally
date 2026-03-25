import { Injectable } from "@nestjs/common";
import { CreateDocumentDto } from "./dto/create-document.dto";
@Injectable()
export class DocumentsService { listMine() { return { message: "My documents placeholder" }; } createMine(dto: CreateDocumentDto) { return { message: "Create document placeholder", dto }; } updateMine(id: string, dto: Partial<CreateDocumentDto>) { return { id, message: "Update document placeholder", dto }; } deleteMine(id: string) { return { id, message: "Delete document placeholder" }; } }

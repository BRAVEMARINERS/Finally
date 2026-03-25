import { Injectable } from "@nestjs/common";
import { PresignUploadDto } from "./dto/presign-upload.dto";
@Injectable()
export class UploadsService { presign(dto: PresignUploadDto) { return { uploadUrl: "https://example-upload-url", storageKey: `documents/${Date.now()}-${dto.filename}`, expiresAt: new Date(Date.now() + 300000).toISOString() }; } }

import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
export class RegisterSeafarerDto { @IsEmail() email!: string; @IsString() @MinLength(8) password!: string; @IsString() fullName!: string; @IsOptional() @IsString() phone?: string; @IsOptional() @IsString() country?: string; }

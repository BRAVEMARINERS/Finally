import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterSeafarerDto } from "./dto/register-seafarer.dto";
import { RegisterCompanyDto } from "./dto/register-company.dto";
import { LoginDto } from "./dto/login.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { VerifyEmailDto } from "./dto/verify-email.dto";
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("register/seafarer") registerSeafarer(@Body() dto: RegisterSeafarerDto) { return this.authService.registerSeafarer(dto); }
  @Post("register/company") registerCompany(@Body() dto: RegisterCompanyDto) { return this.authService.registerCompany(dto); }
  @Post("login") login(@Body() dto: LoginDto) { return this.authService.login(dto); }
  @Post("logout") logout() { return this.authService.logout(); }
  @Post("refresh") refresh() { return this.authService.refresh(); }
  @Get("me") me() { return this.authService.me(); }
  @Post("forgot-password") forgotPassword(@Body() dto: ForgotPasswordDto) { return this.authService.forgotPassword(dto); }
  @Post("reset-password") resetPassword(@Body() dto: ResetPasswordDto) { return this.authService.resetPassword(dto); }
  @Post("verify-email") verifyEmail(@Body() dto: VerifyEmailDto) { return this.authService.verifyEmail(dto); }
  @Post("resend-verification") resendVerification() { return this.authService.resendVerification(); }
}

import { Controller, Post, Body, UseGuards, Patch } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { Users } from  './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    async login(@Body() user: Users): Promise<any> {
      return this.authService.login(user);
    }  

    @Patch('register')
    async register(@Body() user: Users): Promise<any> {
        console.log(user)
;      return this.authService.register(user);
    } 
}

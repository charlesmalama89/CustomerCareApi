import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './user.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, UserRepository]),
        JwtModule.register({
            secretOrPrivateKey: 'secret12356789'
        })
    ],
    providers: [UserService, AuthService],
    controllers: [AuthController],
    exports: [UserService]
})
export class AuthModule {}
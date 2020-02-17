import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  './user.service';
import { Users } from  './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    public async validate(userData: Users): Promise<Users> {
        //return await this.userService.findByEmail(userData.email);
        const user = await this.userService.findByEmail(userData.email);
        console.log(user);
        console.log('===========================');
        console.log(userData.password);
        console.log(user.password);
       const result = await this.compareHash(userData.password, user.password);
       console.log(result);
        if(result == true){
            return user;
        }else{
            throw new HttpException(
            'Email or Password was invalid',
            HttpStatus.BAD_REQUEST,
        );}
       
    }

    async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
        console.log(password)
        console.log(hash)
        const result = await bcrypt.compare(password, hash);
        return result;
      }
      


    public async login(user: Users): Promise< any | { status: number }>{
        return this.validate(user).then(async (userData)=>{
          
          if(!userData){
            return { status: 404 };
          }
          
          const role = await this.userService.userRole(userData.id);
          console.log('********************');
          console.log(role);
          
          Logger.log(role, 'User Role In Auth Service');

          let payload = `${userData.name}${userData.id}`;
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             name:userData.name,
             id: userData.id,
             user_role: role,
             email: userData.email,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };

        });
    }

    public async register(user: Users): Promise<any>{
        console.log(user);
        return await this.userService.createUser(user);
    }
    
    
}


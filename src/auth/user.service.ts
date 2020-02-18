import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Repository, UpdateEvent, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { Users } from './user.entity';
import moment = require('moment');
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private userRepository: UserRepository,
    ) { }

     async findByEmail(email: string): Promise<Users> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    } 

    async findUserDeatils(id: number){
        console.log('======FIND USER DETAILS=======');
        console.log(id);
        
        
        
        const result = await this.userRepository.query("SELECT departments.dept_name from users left JOIN hrm_jobtitle_user on users.id = hrm_jobtitle_user.user_id left join hrm_jobtitles on hrm_jobtitle_user.job_title_id = hrm_jobtitles.id LEFT JOIN departments on hrm_jobtitles.departments_id = departments.id WHERE users.id = '"+id+"';");
        console.log('===RESULTS===');
        Logger.log(result[0]['dept_name'], 'RESULTSS')
        // console.log(JSON.parse(result));
        return  result[0]['dept_name'];
    }

    async userRole(id: number){
        console.log('======FIND USER ROLE=======');
        console.log(id);
        
        
        
        const result = await this.userRepository.query("select roles.name as role_name from users left join role_user on users.id = role_user.user_id left join roles on role_user.role_id = roles.id WHERE users.id = '"+id+"';");
        console.log('===RESULTS===');
        Logger.log(result[0]['role_name'], 'ROLE RESULTSS')
        console.log('====================');
        
        return  result[0]['role_name'];
    }

    async findById(id: number): Promise<Users> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }



    async createUser(user: any): Promise<UpdateResult> {
        
        const email = user.email;
        user.password = await bcrypt.hash(user.password, 10);
        console.log('***********');
        
        console.log(user.password);
        
        //user.created_at = moment().format('YYYY-MM-DD HH:MM:SS');
        user.updated_at = moment().format('YYYY-MM-DD HH:MM:SS');
        console.log(user);
        let userDetails = await this.userRepository.findOne({ where: {email:email} });
            if (userDetails) {
                console.log(userDetails);
                
            let result = this.userRepository.update({email: userDetails.email}, user);
            return result;
            }
    }


}

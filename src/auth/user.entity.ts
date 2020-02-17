import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /* @Column({default: ''})
  avatar: string; */

  @Column()
  email: string;

  
  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  // async comparePassword(attempt: string) {
  //   return await bcrypt.compare(attempt, this.password);
  // }

  @Column({default: ''})
  cost_center: string;

  @Column()
  created_at:string;

  @Column()
  updated_at: string;

}
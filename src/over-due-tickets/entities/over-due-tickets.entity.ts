import { PrimaryGeneratedColumn, Column, Entity, IsNull, CreateDateColumn } from "typeorm";

@Entity()
export class Tickets{
    @PrimaryGeneratedColumn()
    id: number;

  @Column()
  ticketNum: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({nullable: true})
  email: string;
  
  @Column()
  product: string;

  @Column()
  department: string;

  @Column()
  status: string;

  @Column()
  comment: string;

  @CreateDateColumn()
  createdBy: string;

  @Column()
  createdOn: string;

  @Column()
  updatedOn: string;

}
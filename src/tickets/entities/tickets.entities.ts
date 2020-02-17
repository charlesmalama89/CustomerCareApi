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
  status: TicketStatus;

  @Column()
  comment: string;

  @Column({nullable: true})
  closeTicketComment: string;

  @Column()
  createdBy: string;

  @Column({nullable: true})
  closedBy: string;

  @Column()
  createdOn: string;

  @Column()
  updatedOn: string;

}

export type TicketStatus = 'Pending' | 'Closed';

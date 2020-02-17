import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departments{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    dept_name: string;

    @Column()
    dept_supervisor: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;
}
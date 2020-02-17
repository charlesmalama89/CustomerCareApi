import { PrimaryGeneratedColumn, Column, Entity, IsNull } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product: string;

    @Column()
    dateCreated: string;
}
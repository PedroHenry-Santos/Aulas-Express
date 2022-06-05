import { IStudent } from "../../domain/service-models/IStudent";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from "typeorm"


@Entity()
export class Student implements IStudent {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  age!: number;

  @Column()
  hash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
import { ITeacher } from "../../domain/service-models/ITeacher";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from "typeorm"


@Entity()
export class Teacher implements ITeacher {
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
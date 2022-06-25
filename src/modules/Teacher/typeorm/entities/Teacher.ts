import { ITeacher } from "../../domain/service-models/ITeacher";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, OneToMany } from "typeorm"
import { Room } from "../../../Room/typeorm/entities/Room";


@Entity()
export class Teacher implements ITeacher {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  age!: number;

  @Column()
  formation!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  
  @OneToMany(() => Room, (room) => room.teacher)
  rooms!: Room[];
}
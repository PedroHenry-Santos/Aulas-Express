import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, OneToMany, ManyToOne } from "typeorm"
import { Student } from "../../../Student/typeorm/entities/Student";
import { Teacher } from "../../../Teacher/typeorm/entities/Teacher";
import { IRoom } from "../../domain/service-models/IRoom";


@Entity()
export class Room implements IRoom {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ type: 'uuid' })
  teacherId!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Student,  (student) => student.room)
  students!: Student[];

  @ManyToOne(() => Teacher, (teacher) => teacher.rooms)
  teacher!: Teacher;

  @UpdateDateColumn()
  updatedAt!: Date;
}
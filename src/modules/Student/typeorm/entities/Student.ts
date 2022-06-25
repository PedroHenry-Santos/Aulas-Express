import { IStudent } from "../../domain/service-models/IStudent";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Room } from "../../../Room/typeorm/entities/Room";


@Entity()
export class Student implements IStudent {
  
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  roomId!: string;

  @Column()
  name!: string;

  @Column({ type: 'integer' })
  age!: number;

  @Column()
  hash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Room, (room) => room.students)
  @JoinColumn({name: 'roomId' })
  room!: Room
}
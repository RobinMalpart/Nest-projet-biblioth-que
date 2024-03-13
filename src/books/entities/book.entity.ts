import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column("text")
  description: string;

  @Column()
  isBorrowed: boolean;

  @Column({ nullable: true })
  borrowedBy?: number;
}

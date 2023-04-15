import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  // @OneToMany((type) => Orders, (orders) => orders)
  // @JoinTable()
  // orders: Orders[];

  @CreateDateColumn()
  createdAt: Date;
}

import { Orders } from 'src/order/entity/orders.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
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

  @Column()
  isActive: boolean;

  // @OneToMany((type) => Orders, (orders) => orders)
  // @JoinTable()
  // orders: Orders[];

  @CreateDateColumn()
  createdAt: Date;
}

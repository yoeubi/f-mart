import { User } from 'src/users/entity/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderDetail } from './orderDetail.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne((type) => User, (user) => user.id)
  userId: number;

  @OneToMany((type) => OrderDetail, (orderDetail) => orderDetail.id)
  @JoinTable()
  orders: number[];

  @Column()
  createdAt: Date;
}

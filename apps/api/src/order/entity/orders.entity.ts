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

  // @Column()
  // @ManyToOne((type) => User, (user) => user.orders)
  // user: User;

  @OneToMany((type) => OrderDetail, (orderDetail) => orderDetail.id)
  @JoinTable()
  orderDetails: number[];

  @Column()
  createdAt: Date;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

enum Status {
  WAITING,
  DONE,
}

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @OneToMany((type) => Order, (order) => order.id)
  orders: number[];

  @Column()
  status: Status;

  @Column()
  createdAt: Date;
}

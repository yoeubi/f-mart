import { Orders } from 'src/order/entity/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  refreshToken: string;

  @Column()
  @OneToMany((type) => Orders, (orders) => orders.id)
  ordersIds: number[];

  //   @Column()
  //   role: string;

  //   @Column()
  //   address: string;

  @Column()
  createdAt: Date;
}

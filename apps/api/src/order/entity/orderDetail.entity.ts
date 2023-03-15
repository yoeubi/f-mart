import { Merchandise } from 'src/merchandise/entity/merchandise.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Merchandise)
  @JoinTable()
  merchandises: Merchandise;

  @Column()
  quantity: number;
}

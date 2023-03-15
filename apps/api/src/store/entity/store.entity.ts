import { Merchandise } from 'src/merchandise/entity/merchandise.entity';
import { User } from 'src/users/entity/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @OneToOne((type) => User, (user) => user.id)
  managerId: number;

  @Column()
  name: string;

  @OneToMany((type) => Merchandise, (merchandise) => merchandise)
  @JoinTable()
  merchandises: Merchandise[];

  @Column()
  createdAt: Date;
}

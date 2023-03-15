import { Merchandise } from 'src/merchandise/entity/merchandise.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Merchandise)
  @JoinTable()
  merchandises: Merchandise[];
}

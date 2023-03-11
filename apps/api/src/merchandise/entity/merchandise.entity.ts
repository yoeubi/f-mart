import { Categories } from 'src/categories/entity/categories.entity';
import { Store } from 'src/store/entity/store.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Merchandise {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @ManyToOne((type) => Store, (store) => store.id)
  storeId: number;

  @Column()
  @ManyToMany((type) => Categories, (categories) => categories.id)
  categoryIds: number[];

  @Column()
  name: string;

  @Column()
  price: number;

  //   @Column()
  //   quantity: number;

  @Column()
  thumbnail: string;

  @Column()
  descriptionURL: string;

  @Column()
  createdAt: Date;
}

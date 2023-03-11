import { Merchandise } from 'src/merchandise/entity/merchandise.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @ManyToMany((type) => Merchandise, (merchandise) => merchandise.id)
  merchandiseIds: number[];
}

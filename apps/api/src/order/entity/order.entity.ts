import { Merchandise } from 'src/merchandise/entity/merchandise.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @OneToOne((type) => Merchandise, (merchandise) => merchandise.id)
  merchandise: number;

  @Column()
  quantity: number;
}

import { Merchandise } from 'src/merchandise/entity/merchandise.entity';
import { User } from 'src/users/entity/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @OneToOne((type) => User, (user) => user.id)
  userId: number;

  @Column()
  @OneToOne((type) => Merchandise, (merchandise) => merchandise.id)
  merchandiseId: number;

  @Column()
  quantity: number;
}

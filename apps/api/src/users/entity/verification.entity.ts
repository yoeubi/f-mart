import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Verification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => User, (user) => user.id)
  userId: number;

  @Column()
  code: string;

  @Column()
  expiredAt: Date;
}

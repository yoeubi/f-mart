import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class refreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  userId: number;

  @Column()
  expiredAt: Date;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  userId: number;

  @Column({ type: 'timestamp', default: Date.now() + 7 * 24 * 60 * 60 * 1000 })
  expiredAt: number;
}

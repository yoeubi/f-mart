import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Verification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  code: string;

  @Column({ type: 'timestamp', default: Date.now() + 5 * 1000 })
  expiredAt: number;
}

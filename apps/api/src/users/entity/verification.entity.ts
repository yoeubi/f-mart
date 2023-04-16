import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Verification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  code: string;

  // @Column({ default: new Date(), nullable: true })
  // expiredAt: Date;
}

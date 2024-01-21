import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id;

  @Column({ unique: true })
  name;

  @OneToOne(() => User, (user) => user.Permission)
  @JoinColumn()
  user;
}

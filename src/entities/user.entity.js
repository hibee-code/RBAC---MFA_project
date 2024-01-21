
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role..entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  username;

  @ManyToMany(() => Role, (role) => role.user)
  @JoinTable()
  role;
}



import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id;
  
  @Column()
  username;

  @ManyToMany(() => User , (user) => user.Role)
  @JoinTable()
  user;

}



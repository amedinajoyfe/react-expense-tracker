import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  userpassword: string;

  @Column()
  buycategories: string;

  @Column()
  earncategories: string;

  @Column()
  userlanguage: string;

  @Column()
  lastupdate: Date;

  constructor(
    username: string,
    email: string,
    userpassword: string,
    buycategories: string,
    earncategories: string,
    userlanguage: string
  ) {
    this.username = username;
    this.email = email;
    this.userpassword = userpassword;
    this.buycategories = buycategories;
    this.earncategories = earncategories;
    this.userlanguage = userlanguage;
  }
}
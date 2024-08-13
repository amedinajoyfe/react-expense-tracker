import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movements' })
export class Movement{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    userid: string;
  
    @Column()
    expense: boolean;
  
    @Column()
    category: string;
  
    @Column({ type: 'double' })
    amount: number;

    @Column()
    creationdate: Date;

    constructor(userid: string, expense: boolean, category: string, amount: number){
        this.userid = userid;
        this.expense = expense;
        this.category = category;
        this.amount = amount;
    }
}
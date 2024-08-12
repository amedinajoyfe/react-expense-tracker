import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "movements"})
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
}
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.repository.find();
  }

  async getUserById(id:string): Promise<User[]> {
    return this.repository.find({where: {id}});
  }

  async getUserByEmail(email:string): Promise<User[]> {
    return this.repository.find({where: {email}, take: 1});
  }

  async addNewUser(newUser:User): Promise<User> {
    this.repository.insert(newUser);
    return newUser;
  }
}

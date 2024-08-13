import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { CreateUserDto } from './create.user.dto';
import { defaultCategories } from '../translations/defaultCategories';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }

  getUserById(id:string): Promise<User[]> {
    return this.usersRepository.getUserById(id);
  }

  getUserByEmail(email:string): Promise<User[]> {
    return this.usersRepository.getUserById(email);
  }

  async addNewUser(newUser:CreateUserDto): Promise<User | null> {
    const repeatedEmail = await this.getUserByEmail(newUser.email);
    if(repeatedEmail.length > 0)
    {
      return null;
    }

    const newPassword = await bcrypt.hash(newUser.userpassword, 10)
    const language = defaultCategories[newUser.userlanguage] ? newUser.userlanguage : "EN";
  
    const userToAdd = new User(newUser.username, newUser.email, newPassword, defaultCategories[language].buy, defaultCategories[language].earn, language);
    return this.usersRepository.addNewUser(userToAdd);
  }
}

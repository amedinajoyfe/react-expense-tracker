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
    let userExists = true;
    let newid;
    
    while (userExists) {
      let newId = this.generateRandomString(16);
      const users = await this.getUserById(newId);
      userExists = users.length > 0;
    }

    const userToAdd = new User(newid, newUser.username, newUser.email, newPassword, defaultCategories[language].buy, defaultCategories[language].earn, language);
    return this.usersRepository.addNewUser(userToAdd);
  }

  generateRandomString(length: number): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_~';
    
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
}

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create.user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id:string): Promise<User[]> {
    return this.usersService.getUserById(id);
  }

  @Get('email')
  async getUserByEmail(@Param('email') email:string){
    return this.usersService.getUserByEmail(email);
  }

  @Post()
  async addNewUser(@Body() createUserDto: CreateUserDto){
    return await this.usersService.addNewUser(createUserDto);
  }
}

import { UsersService } from './users.service';
import { CreateUserDto } from './create.user.dto';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User[]>;
    getUserByEmail(email: string): Promise<User[]>;
    addNewUser(createUserDto: CreateUserDto): Promise<User>;
}

import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { CreateUserDto } from './create.user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User[]>;
    getUserByEmail(email: string): Promise<User[]>;
    addNewUser(newUser: CreateUserDto): Promise<User | null>;
    generateRandomString(length: number): string;
}

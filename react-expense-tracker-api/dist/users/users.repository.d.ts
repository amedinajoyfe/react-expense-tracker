import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersRepository {
    private readonly repository;
    constructor(repository: Repository<User>);
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User[]>;
    getUserByEmail(email: string): Promise<User[]>;
    addNewUser(newUser: User): Promise<User>;
}

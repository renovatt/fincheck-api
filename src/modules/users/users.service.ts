import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
}

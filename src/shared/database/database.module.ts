import { Global, Module } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repositories';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [UsersRepository, PrismaService],
  exports: [UsersRepository],
})
export class DatabaseModule {}

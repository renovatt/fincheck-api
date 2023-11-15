/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountRepository {
  constructor(private readonly prismaService: PrismaService) { }

  findMany(findManyDto: Prisma.BankAccountFindManyArgs){
    return this.prismaService.bankAccount.findMany(findManyDto)
  }

  findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs){
    return this.prismaService.bankAccount.findFirst(findFirstDto)
  }

  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto)
  }

  update(updateDto: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDto)
  }

  delete(deleteDto: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDto)
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepository } from 'src/shared/repositories/bank-account.repositories';

@Injectable()
export class ValidateBankAccountOwnershipSevice {
  constructor(private readonly bankAccountRepository: BankAccountRepository) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountRepository.findFirst({
      where: { userId, id: bankAccountId },
    });

    if (!isOwner) throw new NotFoundException('Bank account not found');
  }
}

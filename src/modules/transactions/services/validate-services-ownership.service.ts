import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from '../../../shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionOwnershipSevice {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionsRepository.findFirst({
      where: { userId, id: transactionId },
    });

    if (!isOwner) throw new NotFoundException('Transaction not found');
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/repositories/categories.repositories';

@Injectable()
export class ValidateCategoryOwnershipSevice {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async validate(userId: string, categoryId: string) {
    const isOwner = await this.categoriesRepository.findFirst({
      where: { userId, id: categoryId },
    });

    if (!isOwner) throw new NotFoundException('Category not found');
  }
}

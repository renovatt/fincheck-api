import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { TransactionType } from '../entities/Transaction';

export class CreateTransactionDto {
  /**
   * ID da bank account no qual você criou para o tipo da sua transação.
   * Tipos: CHECKING, INVESTIMENT, CASH.
   * @example 655dfb75fda9684a1c943ef7
   */
  @IsNotEmpty()
  @IsString()
  bankAccountId: string;

  /**
   * ID da categoria no qual se encaixa com o tipo da transação. Existem 12 categorias
   * que foram criadas por padrão no momento em que o usuário	 foi criado.
   * @example 655dfb75fda9684a1c943ef7
   */
  @IsNotEmpty()
  @IsString()
  categoryId: string;

  /**
   * Valor da transação, precisa ser número.
   * @example Freelance
   */
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * Valor da transação, precisa ser número.
   * @example 1456
   */
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  value: number;

  /**
   * Data da transação, precisa ser no formato ISO-8601.
   * @example 2023-11-16T11:47:46.410Z
   */
  @IsNotEmpty()
  @IsDateString()
  date: string;

  /**
   * Esta relacionado ao tipo da sua transação que pode ser INCOME, EXPENSE.
   * @example INCOME
   */
  @IsEnum(TransactionType)
  type: TransactionType;
}

import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { BankAccountsType } from '../entities/BankAccounts';

export class CreateBankAccountDto {
  /**
   * Nome da bank account pode ser qualquer um que lhe convem, representando o nome
   * que ideal respectivo.
   * @example "Investimento CDB"
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Valor inicial da sua bank account, que pode ser iniciado em 0.
   * Precisa ser um número.
   * @example 2350
   */
  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  /**
   * Esta relacionado ao tipo da sua bank account que pode ser CHECKING, INVESTIMENT, CASH.
   * @example INVESTIMENT
   */
  @IsNotEmpty()
  @IsEnum(BankAccountsType)
  type: BankAccountsType;

  /**
   * Vai ser a cor individual para indentificar a sua bank account,
   * Representada por um numéro hexadecimal.
   * @example #645655
   */
  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}

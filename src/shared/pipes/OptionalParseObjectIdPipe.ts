import { ArgumentMetadata } from '@nestjs/common';
import { ParseObjectIdPipe } from './ParseObjectIdPipe';

export class OptionalParseObjectIdPipe extends ParseObjectIdPipe {
  override transform(value: string, metadata: ArgumentMetadata) {
    if (value === undefined) return undefined;
    return super.transform(value, metadata);
  }
}

import {
  ArgumentMetadata,
  Injectable,
  ParseIntPipe as NestParseIntPipe,
  PipeTransform,
} from '@nestjs/common';
import { isUndefined } from 'is-what';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  /**
   * Method that accesses and performs optional transformation on argument for
   * in-flight requests.
   *
   * @param value currently processed route argument
   * @param metadata contains metadata about the currently processed route argument
   */
  async transform(value: string, metadata: ArgumentMetadata): Promise<number> {
    if (isUndefined(value)) return value;
    return new NestParseIntPipe().transform(value, metadata);
  }
}

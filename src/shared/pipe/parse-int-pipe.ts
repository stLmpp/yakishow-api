import {
  ArgumentMetadata,
  Injectable,
  ParseIntPipe as NestParseIntPipe,
  PipeTransform,
} from '@nestjs/common';
import { isUndefined } from 'is-what';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): Promise<number> {
    if (isUndefined(value)) return value;
    return new NestParseIntPipe().transform(value, metadata);
  }
}

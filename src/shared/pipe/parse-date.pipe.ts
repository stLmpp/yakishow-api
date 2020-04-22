import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isValid } from 'date-fns';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): Date {
    return value && isValid(value) ? new Date(value) : null;
  }
}

import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValid } from 'date-fns';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any, { data }: ArgumentMetadata): Date {
    return value && isValid(value) ? new Date(value) : null;
  }
}

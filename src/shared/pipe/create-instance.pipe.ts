import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CreateInstancePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    const { metatype } = metadata;
    if (!value || !metatype) {
      return value;
    }
    return plainToClass(metatype, value);
  }
}

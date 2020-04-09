import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isNil } from '../../util/util';

@Injectable()
export class NormalizePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): string {
    return normalize(value);
  }
}

export function normalize(value: any): string {
  if (isNil(value)) return value;
  return ('' + value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

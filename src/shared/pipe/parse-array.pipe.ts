import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isArray } from 'is-what';

@Injectable()
export class ParseArrayPipe implements PipeTransform {
  constructor(private type: 'number' | 'string' = 'string') {}

  transform(value: any, metadata: ArgumentMetadata): any {
    if (!value) return value;
    if (!isArray(value)) {
      value = [value];
    }
    return value.map(o => (this.type === 'number' ? Number(o) : '' + o));
  }
}

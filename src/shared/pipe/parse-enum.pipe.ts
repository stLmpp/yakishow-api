import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isNil } from '../../util/util';

@Injectable()
export class ParseEnumPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): string {
    if (isNil(value)) return null;
    return '' + value;
  }
}

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { AuthService } from './auth.service';
import { isArray, isObject } from 'lodash';
import { CommonHistory } from '../shared/super-entities/common-history';

@Injectable()
export class UpdateHistoryPipe<T extends CommonHistory>
  implements PipeTransform<T> {
  constructor(private authService: AuthService) {}

  transform(value: T, metadata: ArgumentMetadata): T | T[] {
    if (!isObject(value)) return value;
    return isArray(value)
      ? this.authService.setHistoryArray<T>(value)
      : this.authService.setHistory<T>(value);
  }
}

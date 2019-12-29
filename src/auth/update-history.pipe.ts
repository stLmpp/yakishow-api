import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { AuthService } from './auth.service';
import { isArray, isObject } from 'lodash';

@Injectable()
export class UpdateHistoryPipe implements PipeTransform {
  constructor(private authService: AuthService) {}

  transform(value: any, metadata: ArgumentMetadata): any | any[] {
    if (!isObject(value)) return value;
    return isArray(value)
      ? this.authService.setHistoryArray(value)
      : this.authService.setHistory(value);
  }
}

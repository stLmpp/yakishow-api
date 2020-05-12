import { isProd } from '../util/env';
import { UseGuards } from '@nestjs/common';
import { CanActivate } from '@nestjs/common/interfaces';
import { AuthGuard } from '@nestjs/passport';

export function WithAuthGuard(
  ...guards: (CanActivate | ((...args: any[]) => any))[]
): (target: any) => any {
  return (target: any) => {
    if (isProd) {
      UseGuards(AuthGuard(), ...guards)(target);
    } else if (guards.length) {
      UseGuards(...guards)(target);
    }
  };
}

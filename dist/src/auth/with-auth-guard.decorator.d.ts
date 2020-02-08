import { CanActivate } from '@nestjs/common/interfaces';
export declare function WithAuthGuard(...guards: Array<CanActivate | ((...args: any[]) => any)>): (target: any) => any;

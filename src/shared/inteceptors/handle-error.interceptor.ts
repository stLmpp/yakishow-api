import {
  applyDecorators,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getHandleError } from '../error/handle-error';
import { isFunction, isString } from 'is-what';

export interface HandleError {
  defaultMessage?: string;
  methods?: HandleErrorMethods;
}

export interface HandleErrorMethods {
  GET?: HandleErrorMethodStatus;
  POST?: HandleErrorMethodStatus;
  PUT?: HandleErrorMethodStatus;
  PATCH?: HandleErrorMethodStatus;
  OPTIONS?: HandleErrorMethodStatus;
  HEAD?: HandleErrorMethodStatus;
  DELETE?: HandleErrorMethodStatus;
  CONNECT?: HandleErrorMethodStatus;
  TRACE?: HandleErrorMethodStatus;
}

export type HandleErrorMethodStatus =
  | string
  | ((context: ExecutionContext, err: any) => string);

@Injectable()
export class HandleErrorInterceptor implements NestInterceptor {
  constructor(private options: HandleError | string) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(err => {
        return throwError(
          getHandleError(err, this.getErrorMessage(context, err))
        );
      })
    );
  }

  getErrorMessage(context: ExecutionContext, err: any): string {
    if (isString(this.options)) return this.options;
    const method = context.switchToHttp().getRequest().method;
    const errorGetter = this.options?.methods?.[
      method
    ] as HandleErrorMethodStatus;
    if (!errorGetter) return this.options?.defaultMessage ?? 'Erro interno';
    if (isString(errorGetter)) {
      return errorGetter;
    } else if (isFunction(errorGetter)) {
      return (
        errorGetter(context, err) ??
        this.options?.defaultMessage ??
        'Erro interno'
      );
    }
  }
}

export function HandleError(options: HandleError): ClassDecorator;
export function HandleError(error: string): MethodDecorator;
export function HandleError(
  optionsOrError: HandleError | string
): ClassDecorator | MethodDecorator {
  return applyDecorators(
    UseInterceptors(new HandleErrorInterceptor(optionsOrError))
  );
}

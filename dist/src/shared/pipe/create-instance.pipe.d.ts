import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class CreateInstancePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}

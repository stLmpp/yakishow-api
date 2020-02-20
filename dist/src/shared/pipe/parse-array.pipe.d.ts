import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseArrayPipe implements PipeTransform {
    private type;
    constructor(type?: 'number' | 'string');
    transform(value: any, metadata: ArgumentMetadata): any;
}

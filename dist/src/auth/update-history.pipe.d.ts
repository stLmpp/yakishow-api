import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { AuthService } from './auth.service';
export declare class UpdateHistoryPipe implements PipeTransform {
    private authService;
    constructor(authService: AuthService);
    transform(value: any, metadata: ArgumentMetadata): any | any[];
}

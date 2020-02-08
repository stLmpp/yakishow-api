import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ViaCEP } from './models/via-cep';
export declare class ExternalService {
    private http;
    constructor(http: HttpService);
    cepApi(cep: string): Observable<ViaCEP>;
}

import { Observable } from 'rxjs';
import { ViaCEP } from './models/via-cep';
import { ExternalService } from './external.service';
export declare class ExternalController {
    private externalService;
    constructor(externalService: ExternalService);
    cepApi(cep: string): Observable<ViaCEP>;
}

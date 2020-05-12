import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ViaCEP } from './models/via-cep';
import { map } from 'rxjs/operators';

@Injectable()
export class ExternalService {
  constructor(private http: HttpService) {}

  cepApi(cep: string): Observable<ViaCEP> {
    return this.http
      .get<ViaCEP>(`https://viacep.com.br/ws/${cep}/json`)
      .pipe(map(resp => resp.data));
  }
}

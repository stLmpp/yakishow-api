import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ViaCEP } from './models/via-cep';
import { ExternalService } from './external.service';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';

@Controller('external')
@WithAuthGuard()
export class ExternalController {
  constructor(private externalService: ExternalService) {}

  @Get('cep-api/:cep')
  cepApi(@Param('cep') cep: string): Observable<ViaCEP> {
    return this.externalService.cepApi(cep);
  }
}

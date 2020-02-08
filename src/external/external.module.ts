import { HttpModule, Module } from '@nestjs/common';
import { ExternalController } from './external.controller';
import { ExternalService } from './external.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ExternalController],
  providers: [ExternalService],
  imports: [AuthModule, HttpModule],
})
export class ExternalModule {}

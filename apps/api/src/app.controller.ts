import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheckResponse } from '@food-delivery/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('healt')
  health(): HealthCheckResponse {
    return { status: 'ok', timestamp: new Date() };
  }
}

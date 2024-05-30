import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ManipulateService } from './manipulate.service';

@Controller('manipulate')
export class ManipulateController {
  constructor(private readonly manipulateService: ManipulateService) {}

  @Get('random-users')
  getRandomUsers(): Observable<any> {
    return this.manipulateService.getRandomUsers();
  }
}

import { Module } from '@nestjs/common';
import { ManipulateController } from './manipulate.controller';
import { ManipulateService } from './manipulate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ManipulateController],
  providers: [ManipulateService],
})
export class ManipulateModule {}

import { Controller, Get, Query } from '@nestjs/common';
import { CombinationService } from './combination.service';

@Controller('combination')
export class CombinationController {
  constructor(private readonly combinationService: CombinationService) {}

  @Get()
  getCombinations(
    @Query('colors') colors: string,
    @Query('items') items: string,
    @Query('sales') sales: string,
  ): string[] {
    return this.combinationService.generateCombinations(
      colors.split(','),
      items.split(','),
      sales.split(','),
    );
  }
}

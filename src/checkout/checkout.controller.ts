import { Controller, Get } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Get()
  getCheckoutDetails() {
    return this.checkoutService.calculateTotalWithVoucher();
  }
}

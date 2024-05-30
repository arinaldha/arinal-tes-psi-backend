import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckoutService {
  private readonly productPrice = 5000000;
  private readonly voucherDiscount = 0.5;
  private readonly pointPercentage = 0.02;

  calculateTotalWithVoucher(): {
    discountedPrice: number;
    pointsEarned: number;
  } {
    const discountedPrice = this.productPrice * (1 - this.voucherDiscount);
    const pointsEarned =
      this.productPrice * this.voucherDiscount * this.pointPercentage;
    return {
      discountedPrice,
      pointsEarned,
    };
  }
}

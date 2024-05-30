import { Injectable } from '@nestjs/common';

@Injectable()
export class CombinationService {
  generateCombinations(
    colors: string[],
    items: string[],
    sales: string[],
  ): string[] {
    const result = [];

    for (let i = 0; i < colors.length; i++) {
      const item = items[i] !== undefined ? items[i] : items[0];
      const color = colors[i];
      const sale = sales[i] !== undefined ? sales[i] : sales[0];
      result.push(
        `${this.capitalizeFirstLetter(item)} ${this.capitalizeFirstLetter(color)} ${this.capitalizeFirstLetter(sale)}`,
      );
    }

    return result;
  }

  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

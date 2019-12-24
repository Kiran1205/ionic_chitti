import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundGenerator {
  
  constructor() {
    console.log('created');
  }

  COLORS: any[] = ['#EDEB4C','#54632C','#1D7CF2','#49FFB9','#38B0DE','#D14646','#2B4F81','#F87531','#E03852','#ff0040'];

  public getColor(str: string): string {
    return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
  }

  private toNumber(str: string): number {
    let h = 0;

    for (let i = 0; i < str.length; i++) {
      h = 31 * h + str.charCodeAt(i);
      h |= 0; // Convert to 32bit integer
    }
    
    return h;
  };
}
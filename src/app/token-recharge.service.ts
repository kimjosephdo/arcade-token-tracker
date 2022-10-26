import { Injectable } from '@angular/core';
import { LedgerService } from './ledger.service';

@Injectable({
  providedIn: 'root'
})

export class TokenRechargeService {
  pricePerToken = .25;
  constructor(private ledgerService: LedgerService) { }

  buyTokens(numTokens: number): void {
    var price = numTokens * this.pricePerToken;
    this.ledgerService.addTransaction({
      date: new Date(),
      description: `Payed ${price} for`
    })
  }
}

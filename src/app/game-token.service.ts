import { Injectable } from '@angular/core';
import { LedgerService } from './ledger.service';

@Injectable({
  providedIn: 'root'
})
export class GameTokenService {

  constructor(private ledgerService: LedgerService) { }

  playGame(numTokens: number, gameName: string): void {
    this.ledgerService.addTransaction({
      date: new Date(),
      description: `Played game ${gameName} for ${numTokens} tokens.`,
      deltaTokens: -numTokens
    });
  }
}

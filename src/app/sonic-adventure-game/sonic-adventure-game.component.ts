import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Balance } from '../balance';
import { GameTokenService } from '../game-token.service';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-sonic-adventure-game',
  templateUrl: './sonic-adventure-game.component.html',
  styleUrls: ['./sonic-adventure-game.component.css']
})
export class SonicAdventureGameComponent implements OnInit {
  userBalance?: Balance;
  tokenCost: number = 4;
  name: string = "Sonic Adventure";
  tokenInserted: boolean = false;
  message?: string;

  constructor(
    private ledgerService: LedgerService,
    private gameTokenService: GameTokenService) {
      this.ledgerService.getBalance().subscribe(
      balance => this.userBalance = balance);
  }

  ngOnInit(): void {
  }

  playGame(): void {
    //This line is necessary
    this.ledgerService.updateBalance();
    if (this.userBalance === undefined
      || this.userBalance.tokens < this.tokenCost) {
        this.message = "Not enough tokens! Please purchase more tokens to play this game!";
    } else {
      this.gameTokenService.playGame(this.tokenCost, this.name);
      this.tokenInserted = true
      this.message = '';
    }
  }

}

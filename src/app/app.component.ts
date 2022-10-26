import { Component } from '@angular/core';
import { Balance } from './balance';
import { LedgerService } from './ledger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arcade Token Tracker';
  balance?: Balance;

  constructor (private ledgerService: LedgerService) {

  }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    this.ledgerService.getBalance().subscribe(
      balance => this.balance = balance);
  }
}

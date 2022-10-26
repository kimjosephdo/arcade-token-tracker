import { Component, OnInit } from '@angular/core';
import { LedgerService } from '../ledger.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private ledgerService: LedgerService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.ledgerService.getAllTransactions().subscribe(
      transactions => this.transactions = transactions);
  }

}

import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Transaction } from './transaction';
import { Balance } from './balance';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
  balanceSubject = new Subject<Balance>();
  transactions: Transaction[] = [];

  constructor() { }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
    this.updateBalance();
  }

  updateBalance(): void {
    this.balanceSubject.next(this.calculateBalance());
  }

  calculateBalance(): Balance {
    var sum: number = 0;
    this.transactions.forEach(function (transaction) {
      sum += transaction.deltaTokens;
    })
    return {tokens: sum};
  }

  getBalance(): Observable<Balance> {
    return this.balanceSubject.asObservable();
  }

  getAllTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}

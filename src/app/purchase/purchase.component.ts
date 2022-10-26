import { Component, OnInit } from '@angular/core';
import { TokenRechargeService } from '../token-recharge.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  message?: string;
  transactionForm = this.formBuilder.group({
    tokens: 0,
    paymentMethod: ""
  });

  constructor(
    private tokenRechargeService: TokenRechargeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const preTransactionObject = this.transactionForm.value;
    if ( typeof preTransactionObject.paymentMethod != "string"
    || typeof preTransactionObject.tokens != "number"
    || preTransactionObject.paymentMethod.length === 0
    || preTransactionObject.tokens < 1) {
      this.message = "Invalid purchase. A purchase must be of at least 1 token and have a payment method.";
    } else {
      this.tokenRechargeService.buyTokens(preTransactionObject.tokens,
        preTransactionObject.paymentMethod);
      this.message = "Purchase successful!"
    }
  }

}

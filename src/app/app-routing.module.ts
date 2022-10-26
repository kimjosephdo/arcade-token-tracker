import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'history', component: LedgerComponent },
  { path: 'purchase', component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

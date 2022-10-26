import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'history', component: LedgerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

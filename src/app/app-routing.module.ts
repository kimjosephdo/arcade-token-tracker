import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SonicAdventureGameComponent } from './sonic-adventure-game/sonic-adventure-game.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'history', component: LedgerComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'game-browser', component: GameBrowserComponent },
  { path: 'sonic-adventure', component: SonicAdventureGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

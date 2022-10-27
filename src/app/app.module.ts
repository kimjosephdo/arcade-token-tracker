import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';
import { SonicAdventureGameComponent } from './sonic-adventure-game/sonic-adventure-game.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    LedgerComponent,
    PurchaseComponent,
    GameBrowserComponent,
    SonicAdventureGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

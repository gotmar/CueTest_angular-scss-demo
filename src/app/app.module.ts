import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ReservationCardComponent } from './reservation-card/reservation-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ReservationCardComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

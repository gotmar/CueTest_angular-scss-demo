import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReservationButtonComponent } from './reservation-button/reservation-button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ReservationCardComponent,
    ReservationButtonComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

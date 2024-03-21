import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() reservationCardName: string;
  @Input() reservationCardTime: string;
  
}
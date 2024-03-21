import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservation-button',
  templateUrl: './reservation-button.component.html',
  styleUrls: ['./reservation-button.component.css']
})
export class ReservationButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() reservationButtonName: string;

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor() { }

  stocks = [
    {ticker:'AAPL', 
      bought_price:134, 
      current_price:144,
      quantity: 10},
    {ticker:'GOOGL', 
      bought_price:3345, 
      current_price:3400,
      quantity: 27},
    {ticker:'FB', 
      bought_price:34, 
      current_price:24.9,
      quantity: 33},
  ]

  ngOnInit(): void {
  }

}

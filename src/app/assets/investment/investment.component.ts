import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  @Input() ticker:string = ''
  @Input() bought_price:number = 0
  @Input() current_price:number = 0
  @Input() quantity:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}

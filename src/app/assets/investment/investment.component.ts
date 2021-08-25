import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  @Input() ticker:string = ''
  @Input() name:string = ''
  @Input() avgPurchasePrice:number = 0
  @Input() quantity:number = 0

  constructor() { }

  ngOnInit(): void {}

}

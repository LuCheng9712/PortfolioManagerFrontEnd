import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() currPrice:number = 0
  @Input() buySellQuantity:number = 0

  @Output() buySellEvent:EventEmitter<{ticker:string, 
                                        buySellQuantity:number, 
                                        currQuantity:number, 
                                        isSell:boolean}> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  buyShares() {
    this.buySell(false)
  }

  sellShares() {
    this.buySell(true)
  }

  buySell(isSell: boolean) {
    this.buySellEvent.emit({ticker:this.ticker, 
                            buySellQuantity:this.buySellQuantity, 
                            currQuantity: this.quantity, 
                            isSell:isSell})
  }

}

import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { PMInvestmentService } from 'src/services/pminvestment.service'
import { CashAccService } from 'src/services/cash-acc.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  paramObj = {name:'', amount:0}
  accountRemoverId = 0
  accountRemoverName = ''
  constructor(private cashServ:CashAccService, private pminvestmentService:PMInvestmentService) { }

  stocks = [{id:0, ticker:'',  name: '', type: '', quantity: 0, avgPurchasePrice:0, currPrice:0}]
  newStockParams = {id: 0, ticker:"", name: "", type:"", quantity: 0, avgPurchasePrice: 0};
  deleteStockTicker = "";
  updateStockParams = {id: 0, ticker:"", name: "", type:"", quantity: 0, avgPurchasePrice: 0};

  accounts = [
    {name:'askjdn', amount:5, id:0}
  ]

  ngOnInit(): void {
    this.getAllCashAcc()
    this.getAllInvestments();
  }

  //cashacc methods
  getAllCashAcc() {
    this.cashServ.getCashData().subscribe((data:any)=> {
       console.log(data)
       this.accounts = data
     })
   }
   addCashAcc(){
    this.cashServ.addCashAcc(this.paramObj).subscribe((data:any)=> {
      console.log(data)
      this.paramObj = {name:'', amount:0}
      this.getAllCashAcc()
    })
    
  }
  deleteCashAccById(){
    this.cashServ.removeCashAccId(this.accountRemoverId).subscribe((data:any)=> {
      console.log(data)
      this.accountRemoverId = 0
      this.getAllCashAcc()
    })
  }
  deleteCashAccByName(){
    this.cashServ.removeCashAccName(this.accountRemoverName).subscribe((data:any)=> {
      console.log(data)
      this.accountRemoverName = ''
      this.getAllCashAcc()
    })
  }

  //investment methods
  getAllInvestments(){
    this.pminvestmentService.getInvestmentData().subscribe((data:any) => {
      this.stocks = data
      this.getInvestmentCurrPrice();
      console.log(this.stocks)
    })
  }

  getInvestmentCurrPrice() {
    for (let d of this.stocks) {
      let endpoint = "/get_current_price/id/".concat(String(d.id))
      this.pminvestmentService.getInvestmentData(endpoint).subscribe((price:any) => {
        d.currPrice = price
      })
    }
  }

  buyInvestment() {
    let endpoint = "/get_current_price/ticker/".concat(this.newStockParams.ticker)
    this.pminvestmentService.getInvestmentData(endpoint).subscribe((price:any) => {
      this.newStockParams.avgPurchasePrice = price
      this.addInvestment()
      this.getAllInvestments()
    })
  }

  addInvestment(){
    console.log(this.newStockParams)
    this.pminvestmentService.addInvestment(this.newStockParams).subscribe((data:any)=> {
      console.log(data)
    })
  }

  sellInvestment(){
    if (this.deleteStockTicker != "") {
      console.log(this.deleteStockTicker)
      this.pminvestmentService.deleteInvestmentTicker(this.deleteStockTicker, "/ticker/")
      .subscribe((data:any)=> {
        console.log(data)
        this.getAllInvestments()
      })
    }
  }

  handleBuySell(data:any) {
    console.log(data)
    let stock = this.getInvestment(data.ticker)
    if (stock) {
      return
    }
    if (data.isSell && data.buySellQuantity >= data.quantity) {
      this.deleteStockTicker = data.ticker
      this.sellInvestment()
    } else if (data.isSell && data.buySellQuantity < data.quantity) {
      this.updateStockParams.id = stock.id
      this.updateStockParams.ticker = stock.ticker
      this.updateStockParams.name = stock.name
      this.updateStockParams.quantity = stock.quantity - data.buySellQuantity
      this.updateStockParams.avgPurchasePrice = stock.avgPurchasePrice
      this.updateInvestment()
    } else if (!data.isSell) {
      let endpoint = "/get_current_price/ticker/".concat(data.ticker)
      this.pminvestmentService.getInvestmentData(endpoint).subscribe((price:any) => {
        this.updateStockParams.id = stock.id
        this.updateStockParams.ticker = stock.ticker
        this.updateStockParams.name = stock.name
        this.updateStockParams.quantity = stock.quantity - data.buySellQuantity
        this.updateStockParams.avgPurchasePrice = stock.avgPurchasePrice
        this.updateInvestment()
      })
    }
  }

  getInvestment(ticker:string){
    for (let s of this.stocks) {
      if (s.ticker == ticker) {
        return s
      }
    }
    return null
  }

  updateInvestment() {

  }

}

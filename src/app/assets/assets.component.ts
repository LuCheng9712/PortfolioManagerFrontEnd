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
  totalcash = 0

  constructor(private cashServ:CashAccService, private pminvestmentService:PMInvestmentService) { }

  stocks = [{id:0, ticker:'',  name: '', type: '', quantity: 0, avgPurchasePrice:0, currPrice:0}]
  newStockParams = {id: 0, ticker:"", name: "", type:"", quantity: 0, avgPurchasePrice: 0};
  deleteStockTicker = "";
  updateStockParams = {id: 0, ticker:"", name: "", type:"", quantity: 0, avgPurchasePrice: 0};
  totalInvestments = 0

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
       this.getTotalCash()
     })
   }
   getTotalCash(){
    this.cashServ.getTotalCash().subscribe((data:any)=> {
      console.log(data)
      this.totalcash = data
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
    this.totalInvestments = 0
    for (let d of this.stocks) {
      let endpoint = "/get_current_price/id/".concat(String(d.id))
      this.pminvestmentService.getInvestmentData(endpoint).subscribe((price:any) => {
        d.currPrice = price
        this.totalInvestments += d.currPrice * d.quantity
      })
    }
  }

  buyInvestment() {
    this.newStockParams.type = "stocks"
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
    console.log("sell investment")
    if (this.deleteStockTicker != "") {
      console.log(this.deleteStockTicker)
      this.pminvestmentService.deleteInvestment(this.deleteStockTicker, "/ticker/")
      .subscribe((data:any)=> {
        console.log(data)
        this.getAllInvestments()
      })
    }
  }

  handleBuySell(data:any) {
    let stock = this.getInvestment(data.ticker)
    if (stock == null) {
      return
    }
    if (data.isSell && data.buySellQuantity >= data.currQuantity) {
      this.deleteStockTicker = data.ticker
      this.sellInvestment()
    } else if (data.isSell && (data.buySellQuantity < data.currQuantity)) {
      this.updateStockParams.id = stock.id
      this.updateStockParams.ticker = stock.ticker
      this.updateStockParams.name = stock.name
      this.updateStockParams.quantity = stock.quantity - data.buySellQuantity
      this.updateStockParams.avgPurchasePrice = stock.avgPurchasePrice
      this.updateInvestment()
    } else if (!data.isSell) {
      let endpoint = "/get_current_price/ticker/".concat(data.ticker)
      this.pminvestmentService.getInvestmentData(endpoint).subscribe((price:any) => {
        let prev_avg = stock ? stock.avgPurchasePrice : 0
        let prev_quantity = stock ? stock.quantity : 0
        let newAvg = (prev_avg * prev_quantity + price * data.buySellQuantity) / (prev_quantity + data.buySellQuantity)
        
        this.updateStockParams.id = stock ? stock.id : 0
        this.updateStockParams.ticker = stock ? stock.ticker : ""
        this.updateStockParams.name = stock ? stock.name : ""
        this.updateStockParams.quantity = stock ? stock.quantity + data.buySellQuantity : 0
        this.updateStockParams.avgPurchasePrice = stock ? newAvg : 0
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
    this.pminvestmentService.updateInvestmentTicker(this.updateStockParams, "").subscribe((data:any) => {
      console.log(data)
      this.getAllInvestments()
    })
  }

}

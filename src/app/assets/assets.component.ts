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
  accountRemover = 0
  constructor(private cashServ:CashAccService, private pminvestmentService:PMInvestmentService) { }

  stocks = [
    {id:0,
      ticker:'', 
      name: '',
      type: '',
      quantity: 0,
      avgPurchasePrice:0,
      currPrice:0}
  ]

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
    })
    this.paramObj = {name:'', amount:0}
    this.getAllCashAcc()
  }
  deleteCashAccById(){
    this.cashServ.removeCashAccId(this.accountRemover).subscribe((data:any)=> {
      console.log(data)
    })
    this.accountRemover = 0
    this.getAllCashAcc()
  }


  //investment methods
  getAllInvestments(){
    this.pminvestmentService.getApiData().subscribe((data:any) => {
      this.stocks = data
      this.getInvestmentCurrPrice();
      console.log(this.stocks)
    })
  }

  getInvestmentCurrPrice() {
    for (let d of this.stocks) {
      let endpoint = "/get_current_price/id/".concat(String(d.id))
      this.pminvestmentService.getApiData(endpoint).subscribe((price:any) => {
        d.currPrice = price
      })
    }
  }

  updateInvestments(){
    this.getInvestmentCurrPrice();
    this.getAllInvestments();
  }

}

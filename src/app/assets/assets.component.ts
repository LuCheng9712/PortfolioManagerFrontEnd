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

  stocks = [
    {id:0,
      ticker:'', 
      name: '',
      type: '',
      quantity: 0,
      avgPurchasePrice:0}
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
    this.cashServ.removeCashAccId(this.accountRemoverId).subscribe((data:any)=> {
      console.log(data)
    })
    this.accountRemoverId = 0
    this.getAllCashAcc()
  }
  deleteCashAccByName(){
    this.cashServ.removeCashAccName(this.accountRemoverName).subscribe((data:any)=> {
      console.log(data)
    })
    this.accountRemoverName = ''
    this.getAllCashAcc()
  }


  //investment methods
  getAllInvestments(){
    this.pminvestmentService.getApiData().subscribe( (data:any)=>{
      console.log(data)
      this.stocks = data
    })
  }
}

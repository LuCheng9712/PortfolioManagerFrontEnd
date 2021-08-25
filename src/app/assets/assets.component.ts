import { Component, OnInit } from '@angular/core';
import { PMInvestmentService } from 'src/services/pminvestment.service'
import { CashAccService } from 'src/services/cash-acc.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

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
    {name:'askjdn', amount:5}
  ]

  ngOnInit(): void {
    this.getAllCashAcc()
    this.getAllInvestments();
  }

  getAllCashAcc() {
    this.cashServ.getCashData().subscribe((data:any)=> {
       console.log(data)
       this.accounts = data
     })
   }

  getAllInvestments(){
    this.pminvestmentService.getApiData().subscribe( (data:any)=>{
      console.log(data)
      this.stocks = data
    })
  }
}

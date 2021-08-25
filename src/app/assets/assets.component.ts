import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { CashAccService } from 'src/services/cash-acc.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  paramObj = {name:'', amount:0}
  accountRemover = 0
  accounts = [
    {name:'askjdn', amount:5, id:0}
  ]

  constructor(private cashServ:CashAccService) { }

  ngOnInit(): void {
    this.getAllCashAcc()
  }
  getAllCashAcc(){
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

}

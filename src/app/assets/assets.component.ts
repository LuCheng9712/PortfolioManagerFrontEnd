import { Component, OnInit } from '@angular/core';
import { CashAccService } from 'src/services/cash-acc.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  accounts = [
    {name:'askjdn', amount:5}
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

}

import { Component, OnInit } from '@angular/core';
import { PMInvestmentService } from '../../services/pminvestment.service'

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor(private pminvestmentService:PMInvestmentService) { }

  stocks = [
    {id:0,
      ticker:'', 
      name: '',
      type: '',
      quantity: 0,
      avgPurchasePrice:0}
  ]

  ngOnInit(): void {
    this.makeServiceCall();
  }

  makeServiceCall(){
    this.pminvestmentService.getApiData()
      .subscribe( (data:any)=>{
        console.log(data)
        this.stocks = data
      })
  }

}

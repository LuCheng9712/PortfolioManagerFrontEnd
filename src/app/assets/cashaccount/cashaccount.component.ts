import { Component, OnInit, Input } from '@angular/core';
import { CashAccService } from 'src/services/cash-acc.service';


@Component({
  selector: 'app-cashaccount',
  templateUrl: './cashaccount.component.html',
  styleUrls: ['./cashaccount.component.css']
})
export class CashaccountComponent implements OnInit {
  @Input() name:string = 'testing'
  @Input() amount:number = 0
  @Input() id:number = 0
  @Input() depositAmount:number = 0
  @Input() withdrawAmount:number = 0
  
  constructor(private cashServ:CashAccService) { }

  ngOnInit(): void {
  }

  depositCash(){
    this.cashServ.depositCash(this.id, this.depositAmount).subscribe((data:any)=> {
      console.log(data)
    })
    this.depositAmount = 0
  }

  withdrawCash(){
    this.cashServ.withdrawCash(this.id, this.withdrawAmount).subscribe((data:any)=> {
      console.log(data)
    })
    this.withdrawAmount = 0
  }


}

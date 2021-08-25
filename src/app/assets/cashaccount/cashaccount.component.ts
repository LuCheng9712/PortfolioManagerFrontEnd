import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cashaccount',
  templateUrl: './cashaccount.component.html',
  styleUrls: ['./cashaccount.component.css']
})
export class CashaccountComponent implements OnInit {
  @Input() name:string = 'testing'
  @Input() value:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}

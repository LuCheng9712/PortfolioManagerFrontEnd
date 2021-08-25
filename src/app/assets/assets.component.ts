import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  accounts = [
    {name:'First account', value:600},
    {name:'second acc', value:900},
    {name:'third acc', value:3030}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

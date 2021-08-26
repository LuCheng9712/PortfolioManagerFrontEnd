import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  news = {
    title:"Dow Jones Futures Fall: How To Handle The Stock Market Rally As Tesla, Big Techs Tumble",
    summary: "Tech futures fell sharply as Tesla dived on S&P500 news. The stock market rally could \
    go three ways after its sell-off. Investors should be cautious but stay engaged."
  }

  ticker = ''
  quote = 'quote content'

  //fetch news from Yahoo API
  getNews(){
    this.news.title = 'new news title';
    this.news.summary = 'news content';
  }

  //fetch quote from Yahoo API
  getQuote(){
      this.quote = 'updated quote';
  }

  constructor() { }

  ngOnInit(): void {
    //refresh the news 
    // this.getNews();
  }

}

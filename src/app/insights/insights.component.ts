import { Component, OnInit } from '@angular/core';
import { YahooFinService } from 'src/services/yahoo-fin.service';

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

  paramObj = {ticker:'INTC'}
  quote = {
    ticker: this.paramObj.ticker,
    name:'', 
    currency: '', 
    price: 0.00, 
    changePercent: 0.00,
    peg: 0.00,
    dividend: 0.00}

  //fetch news from Yahoo API
  getNews(){
    this.YahooFinService.getNews()
      .subscribe( (data:any)=>{
      } )
      this.news.title = "Op-ed: An ‘active wealth’ plan can maximize long-term financial success"
      this.news.summary = "Last year was a stark example of how active wealth practices can grow \
      personal wealth. Strategies involving three activities — investing, borrowing and managing \
      taxes — could have created 20% to 30% more wealth for the investor who followed them, compar\
      ed to someone with an identical portfolio who allowed inertia — or worse, emotion — to take hold."
      console.log()
  }

  //fetch quote from Yahoo API
  getQuote(){
      console.log("!!")

      this.YahooFinService.getName(this.paramObj.ticker)
      .subscribe( (data:any)=>{
        console.log("!!!")
        console.log(data)
        this.quote.name = data;
      })

      this.YahooFinService.getCurrency(this.paramObj.ticker)
       .subscribe( (data:any)=>{
         this.quote.currency = data;
       })

      this.YahooFinService.getCurrentPrice(this.paramObj.ticker)
       .subscribe( (data:any)=>{
         this.quote.price = data;
       })
       
       this.YahooFinService.getChange(this.paramObj.ticker)
       .subscribe( (data:any)=>{
         this.quote.changePercent = data;
       })

       this.YahooFinService.getDividend(this.paramObj.ticker)
       .subscribe( (data:any)=>{
         this.quote.dividend = data;
       })

  }

  constructor(private YahooFinService:YahooFinService) { }

  ngOnInit(): void {
    //refresh the news when initialize
    // this.getNews();
  }

}

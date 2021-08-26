import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from '../appConstants/apiEndpoints'


@Injectable({
  providedIn: 'root'
})
export class YahooFinService {

  constructor(private http:HttpClient) { }
  
  getNews(){
      console.log()
      return this.http.get("")
    }

  getName(params="") {
    return this.http.get(`${apiEndpoints.pmInvestments}/get_stock_name/${params}`)
  }

  getCurrency(params="") {
    console.log(this.http.get(`${apiEndpoints.pmInvestments}/get_stock_currency/${params}`))
    return this.http.get(`${apiEndpoints.pmInvestments}/get_stock_currency/${params}`)
  }

  getCurrentPrice(params="") {
    return this.http.get(`${apiEndpoints.pmInvestments}/get_stock_price/${params}`)
  }

  getDividend(params="") {
    return this.http.get(`${apiEndpoints.pmInvestments}/get_stock_dividend/${params}`)
  }

  getChange(params="") {
    return this.http.get(`${apiEndpoints.pmInvestments}/get_stock_change/${params}`)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiEndpoints } from '../appConstants/apiEndpoints'

@Injectable({
  providedIn: 'root'
})
export class PMInvestmentService {

  constructor(private http:HttpClient) { }

  getInvestmentData(endpoint=""){
    return this.http.get(`${apiEndpoints.pmInvestments}${endpoint}`)
  }

  addInvestment(params={id:0, ticker:"", name:"", type:"", quantity:0, avgPurchasePrice:0}, endpoint="") {
    return this.http.post(`${apiEndpoints.pmInvestmentsAdd}${endpoint}`, params)
  }

  deleteInvestmentTicker(ticker:string, endpoint="") {
    let e = `${apiEndpoints.pmInvestmentsDelete}${endpoint}`
    console.log(e)
    return this.http.delete(`${apiEndpoints.pmInvestmentsDelete}${endpoint}/${ticker}`)
  }
    
}

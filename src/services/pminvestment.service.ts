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

  deleteInvestment(ticker:string, endpoint="") {
    return this.http.delete(`${apiEndpoints.pmInvestmentsDelete}${endpoint}/${ticker}`)
  }

  updateInvestmentTicker(params={id:0, ticker:"", name:"", type:"", quantity:0, avgPurchasePrice:0}, endpoint="") {
    return this.http.put(`${apiEndpoints.pmInvestmentsUpdate}${endpoint}`, params)
  }
    
}

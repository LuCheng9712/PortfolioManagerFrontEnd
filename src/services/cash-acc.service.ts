import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CashAccService {

  constructor(private http:HttpClient) { }

  getCashData(){
    return this.http.get(`http://portfoliomanager-portfoliomanager.namdevops8.conygre.com/cash_accounts`)
  }
  addCashAcc(params={name:'name',amount:0}){
    return this.http.post(`http://portfoliomanager-portfoliomanager.namdevops8.conygre.com/cash_accounts/addaccount`, {id:0, name:`${params.name}`, amount:`${params.amount}`})
  }
  removeCashAccId(id:number){
    return this.http.delete(`http://portfoliomanager-portfoliomanager.namdevops8.conygre.com/cash_accounts/deletebyid/${id}`)
  }
}

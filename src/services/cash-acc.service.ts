import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiEndpoints } from '../appConstants/apiEndpoints'

@Injectable({
  providedIn: 'root'
})
export class CashAccService {

  constructor(private http:HttpClient) { }

  getCashData(){
    return this.http.get(`${apiEndpoints.pmCashAccounts}`)
  }
  addCashAcc(params={name:'name',amount:0}){
    return this.http.post(`${apiEndpoints.pmCashAccounts}/addaccount`, {id:0, name:`${params.name}`, amount:`${params.amount}`})
  }
  removeCashAccId(id:number){
    return this.http.delete(`${apiEndpoints.pmCashAccounts}/deletebyid/${id}`)
  }
  removeCashAccName(name:string){
    return this.http.delete(`${apiEndpoints.pmCashAccounts}/deletebyname/${name}`)
  }
  depositCash(id:number, depositAmount:number){
    return this.http.post(`${apiEndpoints.pmCashAccounts}/deposit/${depositAmount}`, {id:`${id}`, name:'', amount:0})
  }
  withdrawCash(id:number, withdrawAmount:number){
    return this.http.post(`${apiEndpoints.pmCashAccounts}/withdraw/${withdrawAmount}`, {id:`${id}`, name:'', amount:0})
  }
}

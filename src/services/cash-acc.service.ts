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
}

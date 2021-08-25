import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiEndpoints } from '../appConstants/apiEndpoints'

@Injectable({
  providedIn: 'root'
})
export class PMInvestmentService {

  constructor(private http:HttpClient) { }

  getApiData(params=""){

    return this.http.get(`${apiEndpoints.pmInvestments}${params}`)
  }
}

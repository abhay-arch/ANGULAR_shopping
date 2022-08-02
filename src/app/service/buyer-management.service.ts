import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable ,map } from 'rxjs';
import { Buyer } from '../common/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerManagementService {

  buyurl= "http://localhost:8080/api/buyer"
  constructor(private httpClient : HttpClient,
              private route : Router
    ) { }

  getAllProducts() : Observable<Buyer[]>{
    console.log( this.httpClient.get<getProductResponses>(this.buyurl).pipe(map(response => response._embedded.buyers)))
    return this.httpClient.get<getProductResponses>(this.buyurl).pipe(map(response => response._embedded.buyers))
  }

  saveProduct(buyers : Buyer) : Observable<Buyer>{
    console.log(buyers)

    const httOptions = {
      headers : new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'auth-token' ,
      'Access-Control-Allow-Origin': '*'
      })

    }
   
  
  return this.httpClient.post<Buyer>(this.buyurl,buyers,httOptions)
  }

  
}

interface getProductResponses{
  
  _embedded : {
  
    buyers : Buyer[]
  }
}
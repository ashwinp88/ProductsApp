import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    public APIUrl = 'http://localhost:49918';

    constructor(private httpClient: HttpClient) { }

    getAllProducts() {
        const url =  `${this.APIUrl}/api/products/`;
        return this.httpClient.get(url, { observe: 'response' });
    }

    getProductByID(id: number){
      return this.httpClient.get(this.APIUrl + '/api/products/' + id);
    }
  }

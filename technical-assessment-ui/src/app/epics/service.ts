import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
 
@Injectable()
export class Service {
 
  private serviceUrl: string;
 
  constructor(private http: HttpClient) {
    this.serviceUrl = 'http://localhost:8080/api';
  }
 
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serviceUrl + '/all');
  }
 
  public addProduct(product: Product) {
    return this.http.post<Product>(this.serviceUrl + '/add', product);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';
 
@Injectable()
export class Service {
 
  private serviceUrl: string;
 
  constructor(private http: HttpClient) {
    this.serviceUrl = 'http://localhost:8080/v1/api/';
  }
 
  public getProducts() {
    return this.http.get(this.serviceUrl + 'products');
  }
 
  public addProduct(product: Product) {
    return this.http.post<Product>(this.serviceUrl + 'product', product);
  }

  public findOrderPrice(order: any) {
    return this.http.post(this.serviceUrl + 'findOrderPrice', order);
  }
}
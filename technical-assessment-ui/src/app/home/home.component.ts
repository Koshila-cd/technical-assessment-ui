
import { Component, Input, OnInit, Output }  from '@angular/core';
import { Service } from '../epics/service';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

  export class HomeComponent implements OnInit {

      findOrderPrice: Order;
      total_price: number = 0;
      products: Product[];
      order: Order[];
      findAll: Product[];

      constructor(private service: Service) {
      }


      ngOnInit() {
        this.service.getProducts().subscribe((data: any) => {
          this.products = data
        })
      }

    onAddToCart(product: Product) {
        this.service.findOrderPrice({
          productId: product.id,
          units: product.units
        }).subscribe((data: any) => {
          product.price = data.price;
          this.calculateTotalPrice();
        })
      }

      calculateTotalPrice() {
        this.total_price = 0;
        var that = this;
        console.log(this.products)
        this.products.forEach(product => {
          if (product.price) {
            that.total_price += product.price;
          }
        })

      }
  }

import { Component, Input, OnInit, Output }  from '@angular/core';
import { Service } from '../epics/service';
import { Order } from '../models/order';
import { Product } from '../models/product';
import Big from 'big.js';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

  export class HomeComponent implements OnInit {

      findOrderPrice: Order;
      cart_items: number = 0;
      carton_items: number = 0;
      unit_items: number = 0;
      total_price: number = 0;
      penguin_product_id: number = 0
      units = 0
      products: Product[];


      ngOnInit() {
        this.products = [
          { productId: 1, productName: 'Penguin-Ears', cartonUnits: 20, cartonPrice: Big(175.00), unitPrice:  0},
          { productId: 2, productName: 'Horseshoe', cartonUnits: 5, cartonPrice: Big(825.00), unitPrice: 0}
        ];
      }

      onAddToCart(product: Product, button: String) {
        console.log(button)
        
      }

      onAddUnits(product: Product) {
        
      }

      addProduct() {

      }

      calculateTotalPrice() {

      }
  }
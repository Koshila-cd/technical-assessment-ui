
import { Component, Input, OnInit }  from '@angular/core';
import { Service } from '../epics/service';
import { Product } from '../models/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

  export class HomeComponent implements OnInit {

      @Input()  cart_item_number: number = 10;
      ngOnInit() {
      }
  }
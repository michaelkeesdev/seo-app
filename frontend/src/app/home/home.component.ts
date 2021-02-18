import { environment } from './../../environments/environment.prod';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Monitor } from '../common/models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: Observable<Monitor[]>;

  constructor(private productService: ProductService, private titleService: Title) {
    this.products$ = this.productService.getProducts();
    this.titleService.setTitle(environment.shopName);
  }

  ngOnInit(): void {

  }

}

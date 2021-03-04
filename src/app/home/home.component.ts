import { environment } from './../../environments/environment.prod';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(private productService: ProductService, private titleService: Title, private meta: Meta) {
    this.products$ = this.productService.getProducts();
    this.titleService.setTitle(environment.shopName);
    this.meta.addTag({name: 'description', content: `${environment.shopName} is shop voor axxes IT consultants`});
    this.meta.addTag({name: 'og:image', content: `https://axxes.com/wp-content/themes/axxes/img/layout/logo_new.png`});
    this.meta.addTag({name: 'og:type', content: 'website'});
    this.meta.addTag({name: 'og:url', content: environment.url});
  }

  ngOnInit(): void {

  }

}

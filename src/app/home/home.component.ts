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
    this.meta.updateTag({name: 'description', content: `${environment.shopName} is shop voor axxes IT consultants dat gemaakt is voor de mini-conferentie. Het doel van deze talk is SEO in Angular.`});
    this.meta.updateTag({name: 'og:description', content: `${environment.shopName} is shop voor axxes IT consultants dat gemaakt is voor de mini-conferentie. Het doel van deze talk is SEO in Angular.`});
    this.meta.updateTag({name: 'og:image', content: `https://axxes.com/wp-content/themes/axxes/img/layout/logo_new.png`});
    this.meta.updateTag({name: 'og:type', content: 'website'});
    this.meta.updateTag({name: 'og:url', content: environment.url});

    /*
    { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
      */
  }

  ngOnInit(): void {

  }

}

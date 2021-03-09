import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { Monitor } from '../common/models/product';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product$: Observable<Monitor>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private titleService: Title,
    private meta: Meta,
    ) {
      this.product$ = this.productService.getProduct(this.route.snapshot.params.id)
      .pipe(
        tap((product) => {
          this.titleService.setTitle(`${environment.shopName} - ${product.title}`)
          this.meta.addTag({name: 'description', content: product.description});
          this.meta.addTag({name: 'og:description', content: product.description});
          this.meta.addTag({name: 'og:image', content: product.image});
          this.meta.addTag({name: 'og:type', content: 'website'});
          this.meta.addTag({name: 'og:url', content: `${environment.url}/monitor/${product.productId}`});
        })
      );



    }

  ngOnInit(): void {
  }

}

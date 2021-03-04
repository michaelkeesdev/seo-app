import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    ) {
      this.product$ = this.productService.getProduct(this.route.snapshot.params.id)
      .pipe(
        tap((product) => this.titleService.setTitle(`${environment.shopName} - ${product.title}`))
      );

    }

  ngOnInit(): void {
  }

}

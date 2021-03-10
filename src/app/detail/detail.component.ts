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
export class DetailComponent {
  product$: Observable<Monitor>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    ) {
      this.product$ = this.productService.getProduct(this.route.snapshot.params.id);

    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../environments/environment.prod';
import { Monitor } from './common/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(`${environment?.productApi}/monitors`);
  }

  getProduct(id: string): Observable<Monitor> {
    return this.http.get<Monitor>(`${environment?.productApi}/monitors/${id}`);
  }
}

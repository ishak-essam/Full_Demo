import { HttpClient } from '@angular/common/http';
import { Attribute, Injectable } from '@angular/core';
import { Product } from '../Interface/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getProducts() {
    return this.http.get<Product[]>('/assets/data/Products.json');
  }
}

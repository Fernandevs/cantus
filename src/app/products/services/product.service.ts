import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Category, Product } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${ this.baseUrl }/products`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${ this.baseUrl }/products/categories`);
  }

  getInCategory(category: Category): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${ this.baseUrl }/products/category/${ category.category }`);
  }
}

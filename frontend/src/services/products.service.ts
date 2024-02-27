import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/types/iProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL: string = 'http://localhost:3001/products';

  constructor(public http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseURL);
  }

  getProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseURL}/${id}`);
  }

  updateProductById(id: string, product: any): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.baseURL}/${id}`, {
      ...product,
      id,
    });
  }

  createProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseURL, product);
  }

  deleteProductById(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}

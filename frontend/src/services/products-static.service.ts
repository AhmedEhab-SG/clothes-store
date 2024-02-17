import { Injectable } from '@angular/core';
import { IProduct } from '../app/types/iProduct';
import products from 'src/data/productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductsStaticService {
  products: IProduct[] = [];
  constructor() {
    this.products = products;
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: any): IProduct {
    const targetProduct = this.products.find((product) => product.id === id);

    if (!targetProduct) return this.products[-1];

    return targetProduct;
  }

  updateProductById(id: string, product: any): IProduct {
    const targetProduct = this.products.find((product) => product.id === id);

    if (!targetProduct) return this.products[-1];

    const index = this.products.indexOf(targetProduct);
    this.products[index] = { ...product, id };

    return product;
  }

  createProduct(product: any): IProduct {
    const allProdcut = this.getProducts();
    const id = allProdcut.length + 1;
    const newProduct = { ...product, id: id.toString() };

    this.products.push(newProduct);
    return newProduct;
  }

  deleteProductById(id: string): IProduct {
    const targetProduct = this.products.find((product) => product.id === id);

    if (!targetProduct) return this.products[-1];

    const index = this.products.indexOf(targetProduct);
    this.products.splice(index, 1);

    return targetProduct;
  }
}

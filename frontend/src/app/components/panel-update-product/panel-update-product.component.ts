import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/types/iProduct';
import { ProductsStaticService } from 'src/services/products-static.service';

import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-panel-update-product',
  templateUrl: './panel-update-product.component.html',
  styleUrls: ['./panel-update-product.component.scss'],
})
export class PanelUpdateProductComponent {
  @Output() createdProduct!: EventEmitter<IProduct>;
  currentProduct = {} as IProduct;
  notFound: boolean = false;

  staticImg: string[] = [
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
  ];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private productsStaticService: ProductsStaticService
  ) {
    this.createdProduct = new EventEmitter();
  }

  getProdcutForm = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(1)]],
  });
  updateProductForm = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.maxLength(50)]],
    gender: [''],
    price: ['', [Validators.min(10), Validators.pattern('^[0-9]*$')]],
    stock: ['', [Validators.min(1), Validators.pattern('^[0-9]*$')]],
  });

  getProductHandler() {
    this.notFound = false;
    if (!this.getProdcutForm.valid)
      return this.getProdcutForm.markAllAsTouched();

    const id = this.getProdcutForm.value.id;

    this.productsService.getProductById(id).subscribe({
      next: (product: IProduct) => {
        this.currentProduct = product;

        this.createdProduct.emit(this.currentProduct);
      },
      error: () => {
        this.currentProduct = this.productsStaticService.getProductById(id);
        if (!this.currentProduct) {
          this.notFound = true;
          return;
        }
        this.createdProduct.emit(this.currentProduct);
      },
    });
  }

  updateProductHandler() {
    if (!this.updateProductForm.valid)
      return this.updateProductForm.markAllAsTouched();

    const id = this.currentProduct.id;

    const checkingProduct = {
      ...this.currentProduct,
      name: this.updateProductForm.value.name || this.currentProduct.name,
      gender: this.updateProductForm.value.gender || this.currentProduct.gender,
      price: this.updateProductForm.value.price || this.currentProduct.price,
      stock: this.updateProductForm.value.stock || this.currentProduct.stock,
    };

    this.productsService.updateProductById(id, checkingProduct).subscribe({
      next: (product) => {
        this.currentProduct = product;

        this.createdProduct.emit(this.currentProduct);
      },
      error: () => {
        this.currentProduct = this.productsStaticService.updateProductById(
          id,
          checkingProduct
        );

        this.createdProduct.emit(this.currentProduct);
      },
    });
  }

  clearProduct() {
    this.currentProduct = {} as IProduct;

    this.createdProduct.emit(this.currentProduct);
  }
}

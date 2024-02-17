import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/types/iProduct';

import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-panel-add-product',
  templateUrl: './panel-add-product.component.html',
  styleUrls: ['./panel-add-product.component.scss'],
})
export class PanelAddProductComponent {
  @Output() createdProduct!: EventEmitter<IProduct>;
  allPorductsArr: IProduct[] = [];

  staticImg: string[] = [
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
    'assets/imgs/newProduct.jpg',
  ];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.createdProduct = new EventEmitter();
  }
  addProductForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    gender: ['', [Validators.required]],
    price: [
      '',
      [Validators.required, Validators.min(10), Validators.pattern('^[0-9]*$')],
    ],
    stock: [
      '',
      [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')],
    ],
  });

  addProductHandler() {
    if (!this.addProductForm.valid)
      return this.addProductForm.markAllAsTouched();

    this.productsService
      .createProduct({
        ...this.addProductForm.value,
        imgs: this.staticImg,
      })
      .subscribe({
        next: (createdProduct) => {
          this.createdProduct.emit(createdProduct);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}

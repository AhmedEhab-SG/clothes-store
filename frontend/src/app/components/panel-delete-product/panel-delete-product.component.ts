import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/types/iProduct';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-panel-delete-product',
  templateUrl: './panel-delete-product.component.html',
  styleUrls: ['./panel-delete-product.component.scss'],
})
export class PanelDeleteProductComponent {
  @Output() createdProduct!: EventEmitter<IProduct>;
  currentProduct: IProduct = {} as IProduct;
  deleted: boolean = false;
  notFound: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.createdProduct = new EventEmitter();
  }

  getProdcutForm = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(1)]],
  });

  getProductHandler() {
    this.deleted = false;
    this.notFound = false;
    if (!this.getProdcutForm.valid)
      return this.getProdcutForm.markAllAsTouched();

    const id = this.getProdcutForm.value.id;

    this.productsService.getProductById(id).subscribe({
      next: (product: IProduct) => {
        for (let prop in product) {
          this.currentProduct[prop] = product[prop];
        }
      },
      error: (err) => {
        this.notFound = true;
      },
    });
    if (!this.currentProduct) return;
    this.createdProduct.emit(this.currentProduct);
  }

  deleteProductHandler() {
    this.productsService.deleteProductById(this.currentProduct.id).subscribe({
      next: () => {
        for (let prop in this.currentProduct) {
          if (this.currentProduct.hasOwnProperty(prop)) {
            delete this.currentProduct[prop];
          }
        }
        this.deleted = true;
        console.log(this.currentProduct);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.createdProduct.emit(this.currentProduct);
  }

  clearProduct() {
    this.deleted = false;
    this.currentProduct = {} as IProduct;

    this.createdProduct.emit(this.currentProduct);
  }
}

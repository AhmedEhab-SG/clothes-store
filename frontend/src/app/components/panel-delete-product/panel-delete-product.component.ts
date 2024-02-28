import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/types/iProduct';
import { ProductsStaticService } from 'src/services/products-static.service';
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
    private productsService: ProductsService,
    private productsStaticService: ProductsStaticService
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

    this.productsService
      .getProductById(this.getProdcutForm.value.id)
      .subscribe({
        next: (product: IProduct) => {
          this.currentProduct = product;
          this.createdProduct.emit(this.currentProduct);
        },
        error: () => {
      
          this.currentProduct = this.productsStaticService.getProductById(
            this.getProdcutForm.value.id
          );
      
          if (!this.currentProduct) {
            this.notFound = true;
          } else {
            this.createdProduct.emit(this.currentProduct);
          }
        },
      });
  }

  deleteProductHandler() {
    this.productsService.deleteProductById(this.currentProduct.id).subscribe({
      next: () => {
        this.currentProduct = {} as IProduct;
        this.deleted = true;
        this.createdProduct.emit(this.currentProduct);
      },
      error: () => {
        const deletedOrder = this.productsStaticService.deleteProductById(
          this.currentProduct.id
        );

        if (!deletedOrder) return;

        this.currentProduct = {} as IProduct;
        this.deleted = true;
        this.createdProduct.emit(this.currentProduct);
      },
    });
  }

  clearProduct() {
    this.deleted = false;
    this.currentProduct = {} as IProduct;

    this.createdProduct.emit(this.currentProduct);
  }
}

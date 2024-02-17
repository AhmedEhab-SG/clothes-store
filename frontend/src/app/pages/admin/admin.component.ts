import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types/iProduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  @Input() createdProduct!: IProduct | null;

  titleHeader: string = '';

  constructor() {}

  showUpdateProductForm() {
    this.createdProduct = null;
    this.titleHeader = 'update';
  }

  showAddProductForm() {
    this.createdProduct = null;
    this.titleHeader = 'create';
  }

  showDeleteProductForm() {
    this.createdProduct = null;
    this.titleHeader = 'delete';
  }

  setProduct(product: IProduct) {
    this.createdProduct = product;
  }
}

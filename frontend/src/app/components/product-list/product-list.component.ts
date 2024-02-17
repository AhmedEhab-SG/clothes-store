import { IProduct } from 'src/app/types/iProduct';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsArr: IProduct[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.productsArr = products;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

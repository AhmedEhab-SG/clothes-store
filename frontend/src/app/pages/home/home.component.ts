import { IProduct } from 'src/app/types/iProduct';
import { ProductsStaticService } from '../../../services/products-static.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private productsService: ProductsService,
    private productsStaticService: ProductsStaticService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => {
        this.products = this.productsStaticService.getProducts();
      },
    });
  }
}

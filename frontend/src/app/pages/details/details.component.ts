import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/types/iProduct';
import { ProductsStaticService } from './../../../services/products-static.service';
import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnChanges {
  productId: string = '';
  product = {} as IProduct;
  products: IProduct[] = [];

  constructor(
    private productsService: ProductsService,
    private productsStaticService: ProductsStaticService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];

    this.productsService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        this.product = this.productsStaticService.getProductById(
          this.productId
        );
      },
    });

    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => {
        this.products = this.productsStaticService.getProducts();
      },
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  // force reload the page
}

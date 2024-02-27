import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnChanges {
  @Input() productObj: any = {};

  img: string = '';
  availability: string = 'Buy Now!';
  staticImg: string = 'assets/imgs/newProduct.jpg';

  constructor(private router: Router) {}

  afterViewInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.img =
      (this.productObj.imgs && this.productObj.imgs[0]) || this.staticImg;
    this.checkForStock(this.productObj);
  }

  onHavor() {
    this.img === (this.productObj.imgs && this.productObj.imgs[0])
      ? (this.img =
          (this.productObj.imgs && this.productObj.imgs[1]) || this.staticImg)
      : (this.img =
          (this.productObj.imgs && this.productObj.imgs[0]) || this.staticImg);
  }

  addToCart(product: any) {
    product.stock--;
    this.checkForStock(product);
  }

  goToDetails(id: string) {
    console.log(this.productObj);
    this.router.navigate(['product/details', id]);
  }

  checkForStock(product: any) {
    switch (product.stock) {
      case 1:
        this.availability = 'Only 1 left';
        break;

      case 0:
        this.availability = 'Out of Stock!';
        break;

      default:
        break;
    }
  }
}

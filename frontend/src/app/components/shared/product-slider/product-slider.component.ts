import { IProduct } from 'src/app/types/iProduct';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements OnChanges {
  @Input() titleHeader: string = '';
  @Input() products: IProduct[] = [];
  @Input() btnText: string = '';

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {}

  goToProduct() {
    this.router.navigate(['products']);
  }
}

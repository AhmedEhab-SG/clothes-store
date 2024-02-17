import { IProduct } from './../../types/iProduct';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent implements OnChanges {
  @Input() product = {} as IProduct;
  changedProduct: any;
  accordionArr = [
    {
      title: 'product Question One',
      content:
        ' default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modifyany of this with custom CSS or overriding our default variables. Its also worth noting that just abou any HTML can go within the',
    },
    {
      title: 'product Question Two',
      content:
        ' default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modifyany of this with custom CSS or overriding our default variables. Its also worth noting that just abou any HTML can go within the',
    },
    {
      title: 'product Question Three',
      content:
        ' default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modifyany of this with custom CSS or overriding our default variables. Its also worth noting that just abou any HTML can go within the',
    },
  ];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}

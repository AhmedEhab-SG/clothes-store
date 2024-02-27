import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnChanges {
  @Input() accordionArr: {
    title: string;
    content: string;
  }[] = [];

  ngOnChanges(changes: SimpleChanges): void {}
}

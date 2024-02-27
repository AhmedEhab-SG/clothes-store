import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}

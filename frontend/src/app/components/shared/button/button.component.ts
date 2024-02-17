import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() btnText: string = '';
  @Input() small: boolean = false;
  @Input() full: boolean = false;
  @Input() bgColorTrans: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any>;

  constructor() {
    this.onClick = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges) {}

  onClickHandler() {
    this.onClick.emit();
    
  }
}

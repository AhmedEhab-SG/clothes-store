import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(private router: Router) {}

  goToProduct() {
    this.router.navigate(['/products']);
  }
}

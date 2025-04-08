import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
}

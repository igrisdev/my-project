import { Component, input, output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.addToCart.emit(this.product());
  }
}

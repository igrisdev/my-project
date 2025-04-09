import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/products-detail-state.services';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { ProductItemCart } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductsDetailStateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductsDetailStateService).state;
  stateCart = inject(CartStateService).state;

  id = input.required<number>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.stateCart.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
}

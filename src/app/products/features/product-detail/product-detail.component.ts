import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/products-detail-state.services';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductsDetailStateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductsDetailStateService).state;

  id = input.required<number>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }
}

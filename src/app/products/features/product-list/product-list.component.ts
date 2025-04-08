import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.services';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
}

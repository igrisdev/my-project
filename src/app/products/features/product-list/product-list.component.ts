import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.services';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
}

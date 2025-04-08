import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsService],
})
export default class ProductListComponent {
  private productsService = inject(ProductsService);

  constructor() {
    this.productsService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }
}

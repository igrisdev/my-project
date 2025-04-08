import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { map } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading',
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productsService
        .getProducts()
        .pipe(map((products) => ({ products, status: 'success' as const }))),
    ],
  });
}

import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { map } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
  page: number;
}

@Injectable()
export class ProductsStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading',
    page: 1,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productsService
        .getProducts(1)
        .pipe(map((products) => ({ products, status: 'success' as const }))),
    ],
  });
}

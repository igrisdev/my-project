import { inject, Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';

@Injectable()
export class ProductsService extends BaseHttpService {
  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
}

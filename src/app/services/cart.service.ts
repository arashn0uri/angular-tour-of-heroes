import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';

@Injectable({
    providedIn: "root"
})
export class CartService {
    items = [];
    constructor(
        private http: HttpClient
    ) {}
    addToCart(product: any) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getTotal() {
        let total = 0;
        this.items.forEach(item => total += item.price);
        return total;
    }
    getShippingPrices() {
        return this.http.get<Price[]>('/assets/shipping.json');
      }
}

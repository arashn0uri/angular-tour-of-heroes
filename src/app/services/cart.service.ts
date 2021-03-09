import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CartService {
    items = [];
    constructor() {}
    addToCart(product: any) {
        this.items.push(product);
        console.log(this.items);
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
        console.log("costo totale: ", total);
        return total;
    }
}

import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        this.items.push({ item, count });
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return this.items.reduce((totalCost, cartItem) => totalCost + cartItem.item.price * cartItem.count, 0);
    }

    getCount() {
        return this.items.reduce((totalCount, cartItem) => totalCount + cartItem.count, 0);
    }
}

export default Cart;
// END

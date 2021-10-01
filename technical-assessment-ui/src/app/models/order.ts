import Big from 'big.js';

export class Order {
    productId: number | undefined;
    units: number | undefined;
    price: Big | undefined;
}
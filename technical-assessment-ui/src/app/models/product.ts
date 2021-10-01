import Big from 'big.js';

export class Product {
    productId: number;
    productName: string;
    cartonUnits: number;
    cartonPrice: Big;
    unitPrice: number;
}
import Big from 'big.js';

export class Product {
    productId: number | undefined;
    productName: string | undefined;
    cartonUnits: number | undefined;
    cartonPrice: Big | undefined;
    unitPrice: number | undefined;
}
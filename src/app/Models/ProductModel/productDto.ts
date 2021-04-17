
export interface ProductDto{
    number:number;
    categoryId:number;
    productName:string;
    categoryName:string;
    description:string;
    unitPrice:number;
    unitsInStock:number;
    discontinued:boolean
    hidden:boolean;
    isHome:boolean;
    productImagePath:string;
}
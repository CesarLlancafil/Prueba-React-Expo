export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    electronics = "electronics",
    jewelery = "jewelery",
    mensClothing = "men's clothing",
    womensClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}
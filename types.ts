export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
    categories: Category[];
}

export interface Category{
    id: string;
    name: string;
    billboard: Billboard;
    products: Product[];
}

export interface Product{
    id: string;
    name: string;
    price: string;
    category: Category;
    isFeatured: boolean;
    material: string;
    size:Size;
    color:Color;
    images: Image[];
}

export interface Image{
    id: string;
    url: string;
}

export interface Size{
    id: string;
    name: string;
    value: string;
}

export interface Color{
    id: string;
    name: string;
    value: string;
}

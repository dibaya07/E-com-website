export interface Products {
    _id: number,
    id: number,
    title: string,
    brand: string,
    category: string,
    description: string,
    price: number,
    rating: number,
    stock: number,
}

export interface ProductState {
    allProducts : Products[]
}
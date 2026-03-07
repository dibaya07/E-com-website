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

export type productListProp = {
    productHandler : (id: number) => void,
    allProducts : Products[],
    loading : boolean,
}

export type paginationProp = {
    handlePagination : (state : string) => void
    page: number,
    totalProduct : number,
}

export type productIdParams = {
    params : Promise<{id :string}>,
}
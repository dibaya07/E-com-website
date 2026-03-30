
export interface Product {
    _id: number,
    id: number,
    title: string,
    brand: string,
    category: string,
    price: number,
    stock: number,
    rating: number,
    description: string,
}


export type adminProductState = {
    allProducts : Product[]
}

export type Product_searchParams_Prop = {
    searchParams : {page? : string }
}

export type product_detailsProp = {
    allProducts : Product[],
    totalProduct : number,
    currentPage : number,
}

export type paginationProp = {
    totalProduct : number, 
    // handlePagination : (state : string)=> void,
    currentPage : number
}
export interface Products {
    _id: string,
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
    productHandler : (id: string) => void,
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

export interface CartQty {
 id : string,
 qty : number
}

export interface CartItems  {
    allCarts : CartQty[],
}

export type DisplayCartProp = {
    handleQuantity : (id:string ,stock:number, status : string)=>void,
     handleRemove : (id:string)=>void,
       cartItems : Products[],
        allCarts : CartQty[],
        PriceFormat : (value : number)=> string
}

export type TotalPriceProp = {
    PriceFormat : (value : number)=> string,
     price : number,
      taxs : number
}

// id:string ,stock:number, status : string

// export type formProp = {
//     handleSubmit : (formData : FormData)=> void
// }

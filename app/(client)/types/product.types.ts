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
    owner : string,
    role : string
}

export interface ProductState {
    allProducts : Products[]
}

// export type productListProp = {
//     // productHandler : (id: string) => void,
//     allProducts : Products[],
//     loading : boolean,
// }

export type paginationProp = {
    // setPage : (cb : (num : number)=>number)  => void,
    // handlePagination : (state : string)=> void,
    page: number,
    totalProduct : number,
}

// export type productPageCountProp = {

// }

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

export type proceedBtnProp = {
    price : number,
    tax : number
}


export type Products_searchParams_Prop = {
    searchParams : {page? : string }
}


export type ProductListProp ={
   allListedProducts : {
     allProducts : Products[],
    productCount : number
   }
}

export type successSearchParamsProp = {
    searchParams : {
        session_id? : string
    },
}



// id:string ,stock:number, status : string

// export type formProp = {
//     handleSubmit : (formData : FormData)=> void
// }

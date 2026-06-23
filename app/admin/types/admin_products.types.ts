

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
    status : string,
    images: string[]
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


export type productFormData = {
    title: string,
    brand: string,
      description: string,
      price: number,

      stock: number,
      category: string,
    //   tages: string,
      status: string,
      image: File[]
}


export type PreviewImgProps = {
    fileDetails : File,
    handleRemove : (index : number)=> void,
    index : number
}
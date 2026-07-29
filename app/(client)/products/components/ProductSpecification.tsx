"use client"

export default function ProductSpecification() {


const copyItem = (e : React.MouseEvent<HTMLButtonElement>)=>{
  e.stopPropagation();
  navigator.clipboard.writeText(window.location.href);
alert("Product link copied!");
}

  return (
    <div className='flex justify-center font-medium text-2xl  py-3 gap-2'>
       <button onClick={copyItem} className="cursor-pointer">
                  Copy
                </button>
      <p>Product specification here</p>
    </div>
  )
}

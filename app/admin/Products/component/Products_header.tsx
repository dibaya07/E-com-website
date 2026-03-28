

export default function Products_header() {
  return (
    <div className='flex gap-5 bg-gray-200/70 py-3 px-3 justify-between text-sm'>
                   <input type="checkbox" />
                    <span className="w-[20%] text-start">Product name</span>
                    <span className="w-[10%] text-start">Category</span>
                    <span className="w-[10%] text-start">Price</span>
                    <span className="w-[10%] text-start">stock level</span>
                    <span className="w-[10%] text-start">status</span>
                    <span className="w-[10%] text-center">Action</span>
                </div>
  )
}

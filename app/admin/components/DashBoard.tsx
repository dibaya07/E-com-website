

export default function DashBoard() {
  return (
    <div className='flex flex-col bg-(--gray) flex-1 '>
      <span>Dashboard Overview</span>
      <div className='total_sales flex gap-3'>
        <div className='bg-blue-400 flex flex-col'>
            <span>Total sales</span>
            <span>sale price</span>
        </div>
        <div className='bg-blue-400 flex flex-col'>
            <span>Total sales</span>
            <span>sale price</span>
        </div>
      </div>
      <div className='sales_overview flex gap-3'>
        <div className='bg-purple-400'>
            <span>Sales overview</span>
        </div>
        <div className='bg-purple-400'>
            <span>top selling products</span>
        </div>
      </div>
      <div className="recent_orders bg-gray-500">
        <span>Recent orders</span>
      </div>
    </div>
  )
}

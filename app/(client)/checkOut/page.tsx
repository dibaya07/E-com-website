// import React from 'react'
// import CustomerDetails from './components/CustomerDetails'

// export default function page() {
//   return (
//     <div>
//       <CustomerDetails/>
      
//     </div>
//   )
// }





// export default async function page({ searchParams }) {
//   const { canceled } = await searchParams

//   if (canceled) {
//     console.log(
//       'Order canceled -- continue to shop around and checkout when you’re ready.'
//     )
//   }
//   return (
//     <form action="/api/checkout_sessions" method="POST">
//       <section>
//         <button type="submit" role="link">
//           Checkout
//         </button>
//       </section>
//     </form>
//   )
// }
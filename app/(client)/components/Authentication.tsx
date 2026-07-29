// "use client"
// import { Show, UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import { FiLogIn } from "react-icons/fi";


// export function Authentication() {
//   return (
//     <span className="flex justify-center items-center p-1 bg-(--gray) rounded-lg">
//       <Show when="signed-out">
//         <Link
//           href={"/sign-in"}
//           className="flex sm:hidden hover:bg-blue-800 hover:text-white px-2 py-1 hover:rounded-lg lg:border-white lg:border-r-2"
//         >
//           <FiLogIn />
//         </Link>
//         <Link
//           href={"/sign-in"}
//           className="hidden sm:flex hover:bg-blue-800 hover:text-white px-2 py-1 hover:rounded-lg lg:border-white lg:border-r-2"
//         >
//           Sign In
//         </Link>
//         <Link
//           href={"/sign-up"}
//           className="hidden lg:flex hover:bg-blue-800 hover:text-white px-2 py-1 hover:rounded-lg"
//         >
//           Sign Up
//         </Link>
//       </Show>
//      <Show when="signed-in">
//         <UserButton />
//       </Show> 

//     </span>
//   );
// }



// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import { getUserFromDb } from "@/utils/password"
// // import { NextResponse } from "next/server"
// // import { redirect } from "next/navigation"
// // import { redirect } from "next/dist/server/api-utils"

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//         Credentials({
//             credentials: {
//                 email: {
//                     type: "email",
//                     placeholder: "Enter your email"
//                 },
//                 password: {
//                     type: "password",
//                     placeholder: "******"
//                 },
//             },
//             authorize: async (credentials) => {
//                 let user = null
//                 // const { email, password } = credentials ;
//                 const email = credentials?.email;
//                 const password = credentials?.password
//                 user = await getUserFromDb(email, password);
//                 // console.log("user", user)

//                 if (!user) {
//                     // console.log('working')
//                     // redirect('/')
//                     // return NextResponse.redirect(new URL("/",request.url))
//                     // throw new Error("user not found")
//                     // return NextResponse.json({message:'null is answer'});
//                     // return null;
//                     throw new Error("Invalid credentials.")
//                 }

//                 return user
//             },
//         }),
//     ],
// })
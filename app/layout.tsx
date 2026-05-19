import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "@/app/globals.css";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Zentro E-com website",
  description: "A e-commerce website with sample products",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const {userId} = await auth()
  // if ( userId){
  //   const currUser = await currentUser()
  //   if(currUser?.publicMetadata.role == "admin"){
  //     redirect('/admin')

  //   }else{
  //     redirect('/')
  //   }

  // }
  // console.log("userId", await auth())
  // console.log("currUser", await currentUser())
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
     </ClerkProvider>
  );
}

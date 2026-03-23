import type { Metadata } from "next";
import Navbar from "./components/Navbar";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";


export const metadata: Metadata = {
  title: "Zentro E-com website",
  description: "A e-commerce website with sample products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <Navbar/>
         {children} 
        </body>
    </html>
  );
}

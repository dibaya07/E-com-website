import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import StoreProvider from "./storeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InitCart from "./cart/components/InitCart";
import { ClerkProvider } from "@clerk/nextjs";

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
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <ClerkProvider>
            <Navbar />
            <InitCart />
            {children}
            <Footer />
          </ClerkProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

// {children}

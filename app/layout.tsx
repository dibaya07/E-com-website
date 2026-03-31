import type { Metadata } from "next";

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
        {children}
        </body>
    </html>
  );
}



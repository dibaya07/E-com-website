import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Zentro E-com website",
  description: "A e-commerce website with sample products",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
     </ClerkProvider>
  );
}

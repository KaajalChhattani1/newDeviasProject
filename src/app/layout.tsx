"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname != "/auth/signIn" ? <Navbar /> : null}
        {children}
      </body>
    </html>
  );
}

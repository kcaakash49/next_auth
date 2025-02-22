import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./provider";
import Appbar from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-40 py-10 bg-slate-100 min-h-screen flex flex-col ">
          <Appbar/>
          <div className="flex-grow flex justify-center items-center">
          <Providers>{children}</Providers>

          </div>
        </div>
      </body>
    </html>
  );
}

'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./common/layout/components/header";
import Footer from "./common/layout/components/footer";
import "@/styles/globals.css"
import store from "../store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " main"}>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

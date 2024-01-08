import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ModalProvider from "@/providers/ModalProvider";
import Navbar from "@/components/nav/NavBar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import ToastProvider from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puzzle",
  description: "The e-commerce destination for all kind of awesome products",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          <ToastProvider />
          <Navbar />
          <ModalProvider />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

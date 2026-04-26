import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import { LanguageContextProvider } from "@/context/LanguageContext";
import Script from "next/script";

const kodeMono = Kode_Mono({
   subsets: ["latin"],
   variable: "--font-kode-mono",
   display: "swap",
});
export const metadata: Metadata = {
   title: "Tulio Ruzo's Portfolio",
   description: "Software Developer Portfolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <link
               rel="stylesheet"
               href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
         </head>
         <body className={`${kodeMono.variable} antialiased`}>
            <LanguageContextProvider>{children}</LanguageContextProvider>

            <Script
               src="https://kit.fontawesome.com/d2dfe56c5c.js"
               crossOrigin="anonymous"
               strategy="afterInteractive"
            />
         </body>
      </html>
   );
}

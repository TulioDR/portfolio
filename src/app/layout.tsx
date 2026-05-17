import type { Metadata } from "next";
import { Kode_Mono, Inconsolata } from "next/font/google";
import "./globals.css";
import "swiper/css";
import { LanguageContextProvider } from "@/context/LanguageContext";
import Script from "next/script";
import Navigation from "@/modules/navigation/components/Navigation";
import Preloader from "@/modules/preloader/components/Preloader";
import { PreloaderContextProvider } from "@/modules/preloader/context/PreloaderContext";
import { PageTransitionContextProvider } from "@/modules/pageTransition/context/PageTransitionContext";
import AnimatedLayout from "@/modules/pageTransition/components/AnimatedLayout";

const kodeMono = Kode_Mono({
   subsets: ["latin"],
   variable: "--font-kode-mono",
   display: "swap",
});

const inconsolata = Inconsolata({
   subsets: ["latin"],
   variable: "--font-inconsolata", // Define the CSS variable name
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
         <body className={`${inconsolata.variable} antialiased`}>
            <PreloaderContextProvider>
               <LanguageContextProvider>
                  <PageTransitionContextProvider>
                     <Navigation />
                     <Preloader />
                     <AnimatedLayout>{children}</AnimatedLayout>
                  </PageTransitionContextProvider>
               </LanguageContextProvider>
            </PreloaderContextProvider>

            <Script
               src="https://kit.fontawesome.com/d2dfe56c5c.js"
               crossOrigin="anonymous"
               strategy="afterInteractive"
            />
         </body>
      </html>
   );
}

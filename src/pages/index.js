import Head from "next/head";

import Navbar from "containers/Navbar";
import Banner from "containers/Banner";
import About from "containers/About";
import Projects from "containers/Projects";
import Footer from "containers/Footer";
import Modal from "containers/Modal";

import PositionProvider from "context/PositionContext";
import ThemeProvider from "context/ThemeContext";
import IdiomProvider from "context/IdiomContext";
import ModalStateProvider from "context/ModalStateContext";

export default function Home() {
   return (
      <div className="overflow-x-hidden bg-gray-200 dark:bg-gray">
         <Head>
            <title>Tulio Ruzo</title>
            <link rel="icon" href="/favicon.ico" />
            <link
               href="https://fonts.googleapis.com/icon?family=Material+Icons"
               rel="stylesheet"
            />
         </Head>

         <ThemeProvider>
            <PositionProvider>
               <IdiomProvider>
                  <ModalStateProvider>
                     <Navbar />
                     <Banner />
                     <About />
                     <Projects />
                     <Footer />
                     <Modal />
                  </ModalStateProvider>
               </IdiomProvider>
            </PositionProvider>
         </ThemeProvider>
      </div>
   );
}

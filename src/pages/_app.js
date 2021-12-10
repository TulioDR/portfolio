import "tailwindcss/tailwind.css";
import "styles/custom.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      AOS.init({
         duration: 1500,
         once: true,
      });
   }, []);
   return <Component {...pageProps} />;
}

export default MyApp;

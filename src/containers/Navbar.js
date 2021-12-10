import Container from "components/Container";
import NavMenuMobile from "components/Navbar/NavMenuMobile";
import useScroll from "hooks/useScroll";

import NavBrand from "../components/Navbar/NavBrand";
import NavMenu from "../components/Navbar/NavMenu";

export default function Navbar() {
   const [onScroll] = useScroll();
   return (
      <div
         className={`z-20 duration-300 fixed transition-all bg-gray-300 dark:bg-black w-full text-white top-0 py-4 ${
            onScroll ? "py-3" : "lg:py-8 xl:py-12"
         } `}
      >
         <Container>
            <div className="flex justify-between items-center">
               <NavBrand />
               <NavMenu />
               <NavMenuMobile />
            </div>
         </Container>
      </div>
   );
}

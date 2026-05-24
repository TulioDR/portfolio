import { AnimatePresence } from "framer-motion";
import TranslateIcon from "./TranslateIcon";
import NavButtonContainer from "./NavButtonContainer";
import Link from "next/link";

type Props = {
   icon: string;
   onClick?: () => void;
   topLeft?: true;
   topRight?: true;
   bottomRight?: true;
   bottomLeft?: true;
   show?: boolean;
   translate?: true;
   tooltip: string;
   href?: string;
};

export default function NavButton({
   icon,
   onClick,
   topLeft,
   topRight,
   bottomRight,
   bottomLeft,
   show = true,
   translate,
   tooltip,
   href,
}: Props) {
   const className =
      "relative w-full h-full flex items-center justify-center cursor-pointer";
   const Wrapper = ({ children }: { children: React.ReactNode }) =>
      href ? (
         <Link href={href} className={className}>
            {children}
         </Link>
      ) : (
         <button onClick={onClick} className={className}>
            {children}
         </button>
      );

   return (
      <AnimatePresence>
         {show && (
            <NavButtonContainer
               topLeft={topLeft}
               topRight={topRight}
               bottomRight={bottomRight}
               bottomLeft={bottomLeft}
               tooltip={tooltip}
            >
               <Wrapper>
                  <span className="material-symbols-outlined">{icon}</span>
                  {translate && <TranslateIcon />}
               </Wrapper>
            </NavButtonContainer>
         )}
      </AnimatePresence>
   );
}

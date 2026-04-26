import RevealToTop from "@/animations/RevealToTop";

interface Props {
   children: React.ReactNode;
   alternative?: boolean;
   href: string;
   valid: boolean;
}

export default function HeaderButton({
   children,
   alternative,
   href,
   valid,
}: Props) {
   return (
      <div className="overflow-hidden md:hover:-translate-y-1 duration-300">
         <RevealToTop reverse={alternative}>
            <a
               href={href}
               target={valid ? "_blank" : undefined}
               className={`bg-main-orange w-max px-5 md:px-8 lg:px-10 h-11 md:h-12 flex items-center cursor-pointer ${
                  alternative ? "rounded-xl" : "rounded-full"
               }`}
            >
               <span className="text-sm sm:text-base md:text-lg">
                  {children}
               </span>
            </a>
         </RevealToTop>
      </div>
   );
}

import Link, { LinkProps } from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import usePageTransitionContext from "../context/PageTransitionContext";

type Props = LinkProps &
   ComponentPropsWithoutRef<"a"> & {
      children?: React.ReactNode;
   };

export default function TransitionLink({ children, href, ...rest }: Props) {
   const { startNavigation } = usePageTransitionContext();
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      startNavigation(href);
   };

   return (
      <Link href={href} onClick={handleClick} {...rest}>
         {children}
      </Link>
   );
}

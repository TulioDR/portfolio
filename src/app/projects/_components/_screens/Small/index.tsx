import React from "react";
import Header from "../../Header";
import MobileProjectsShowcase from "./MobileProjectsShowcase";

type Props = {};

export default function Mobile({}: Props) {
   return (
      <div className="pb-24">
         <Header />
         <MobileProjectsShowcase />
      </div>
   );
}

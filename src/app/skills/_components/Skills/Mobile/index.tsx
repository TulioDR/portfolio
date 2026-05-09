import React from "react";
import AboutCard from "../../AboutCard";
import CardContent from "./CardContent";

type Props = {};

export default function Mobile({}: Props) {
   return <AboutCard content={<CardContent />} screenOnly />;
}

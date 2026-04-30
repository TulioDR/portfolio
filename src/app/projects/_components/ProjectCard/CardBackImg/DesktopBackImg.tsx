import React from "react";
import Img from "./Img";
import ProjectModel from "@/models/ProjectModel";
import useDesktopParallaxImage from "@/modules/projects/hooks/useDesktopParallaxImage";

type Props = {
   project: ProjectModel;
};
export default function DesktopBackImg({ project }: Props) {
   const { imgRef, scrollXProgress } = useDesktopParallaxImage();

   return <Img imgRef={imgRef} position={scrollXProgress} project={project} />;
}

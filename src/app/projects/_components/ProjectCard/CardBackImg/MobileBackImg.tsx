import React from "react";
import Img from "./Img";
import ProjectModel from "@/models/ProjectModel";
import useMobileParallaxImage from "@/modules/projects/hooks/useMobileParallaxImage";
import useDeviceOrientation from "@/hooks/useDeviceOrientation";

type Props = {
   project: ProjectModel;
};

export default function MobileBackImg({ project }: Props) {
   const { containerRef, turn } = useDeviceOrientation();
   const { position } = useMobileParallaxImage(turn);

   return <Img imgRef={containerRef} position={position} project={project} />;
}

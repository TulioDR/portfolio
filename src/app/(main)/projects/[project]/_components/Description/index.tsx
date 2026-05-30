import Paragraph from "@/components/Typography/Paragraph";
import Subtitle from "@/components/Typography/Subtitle";
import useLanguageContext from "@/context/LanguageContext";
import ProjectType from "@/types/ProjectType";
import Image from "next/image";

type Props = {
   project: ProjectType;
};

export default function Description({ project }: Props) {
   const { language } = useLanguageContext();

   const { overview } = language.projectDetails;

   return (
      <div className="w-full">
         <div className="w-full aspect-video relative overflow-hidden border border-line">
            <Image
               src={project.landingImg || project.showcaseImg}
               alt={project.title}
               className="object-cover w-full h-full"
            />
         </div>
         <div className="flex-1 flex flex-col gap-4 mt-4 xl:mt-8">
            <Subtitle blackText text={overview} />
            <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-16">
               <Paragraph
                  blackText
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, excepturi. Minima quia, ipsa velit consectetur nihil ad accusamus obcaecati doloribus! Vel fugit quo voluptas, quas ab obcaecati officia quae culpa corrupti, dolorum, totam nemo quos quod non. Aut deserunt voluptate accusantium nesciunt mollitia odit harum sint magni, reiciendis consequatur architecto!"
               />
               <Paragraph
                  blackText
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, excepturi. Minima quia, ipsa velit consectetur nihil ad accusamus obcaecati doloribus! Vel fugit quo voluptas, quas ab obcaecati officia quae culpa corrupti, dolorum, totam nemo quos quod non. Aut deserunt voluptate accusantium nesciunt mollitia odit harum sint magni, reiciendis consequatur architecto!"
               />
            </div>
         </div>
      </div>
   );
}

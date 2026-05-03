import CardText from "@/app/projects/_components/ProjectCardBody/CardText";
import CardTitle from "@/app/projects/_components/ProjectCardBody/CardTitle";

type Props = {
   text: string;
   restart?: boolean;
   flex?: number;
   title?: true;
   header?: true;
};

export default function ListText({
   text,
   restart,
   flex = 1,
   title,
   header,
}: Props) {
   return (
      <div
         style={{ flex: flex }}
         className="overflow-hidden flex justify-start"
      >
         {title && <CardTitle title={text} initial restart={restart} />}
         {header && (
            <CardText
               text={text}
               initial
               className="text-xs"
               restart={restart}
            />
         )}
         {!title && !header && (
            <CardText text={text} initial restart={restart} />
         )}
      </div>
   );
}

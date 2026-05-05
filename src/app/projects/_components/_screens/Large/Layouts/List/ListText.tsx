import CardText from "@/app/projects/_components/ProjectCardBody/CardText";

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
         <CardText
            text={text}
            initial
            restart={restart}
            title={title}
            header={header}
         />
      </div>
   );
}

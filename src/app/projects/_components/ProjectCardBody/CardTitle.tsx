import CardText from "./CardText";

type Props = {
   title: string;
   initial?: true;
   restart?: boolean;
};

export default function CardTitle({ title, initial, restart }: Props) {
   return (
      <CardText
         text={title}
         className="text-5xl"
         initial={initial}
         restart={restart}
      />
   );
}

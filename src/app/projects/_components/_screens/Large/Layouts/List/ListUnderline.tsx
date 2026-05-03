import CardLine from "@/app/projects/_components/ProjectCardBody/CardLine";

type Props = {
   initial?: true;
};

export default function ListUnderline({ initial }: Props) {
   return (
      <CardLine
         initial={initial}
         className="bottom-0 left-0 absolute bg-line h-px"
      />
   );
}

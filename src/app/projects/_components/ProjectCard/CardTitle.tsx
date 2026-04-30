import Subtitle from "@/components/Subtitle";

type Props = {
   title: string;
};

export default function CardTitle({ title }: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center p-3 lg:p-10  text-center z-10">
         <Subtitle text={title} />
      </div>
   );
}

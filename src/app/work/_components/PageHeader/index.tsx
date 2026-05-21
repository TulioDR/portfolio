import MouseIcon from "@/components/MouseIcon";
import PageTitle from "@/components/PageTitle";

type Props = {};

export default function PageHeader({}: Props) {
   return (
      <div className="h-svh w-full flex items-center justify-center">
         <div className="relative">
            <PageTitle title="Work" />
            <div className="absolute top-full pt-4 w-full flex justify-center">
               <MouseIcon />
            </div>
         </div>
      </div>
   );
}

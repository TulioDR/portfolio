import MouseIcon from "@/components/MouseIcon";
import PageTitle from "@/components/Typography/PageTitle";

type Props = {
   isLoaded: boolean;
};

export default function PageHeader({ isLoaded }: Props) {
   return (
      <div className="h-svh w-full flex items-center justify-center">
         {isLoaded && (
            <div className="relative">
               <PageTitle title="Work" />
               <div className="absolute top-full pt-4 w-full flex justify-center">
                  <MouseIcon />
               </div>
            </div>
         )}
      </div>
   );
}

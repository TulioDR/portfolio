import HomeTitleText from "@/app/_components/HomeTitleText";

type Props = {};

export default function HomeTitle({}: Props) {
   return (
      <div className="w-full flex-1 relative">
         <div className="absolute inset-0 flex items-center translate-x-8">
            <HomeTitleText />
         </div>
      </div>
   );
}

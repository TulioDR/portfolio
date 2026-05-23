import MyName from "@/app/_components/MyName";
import Socials from "@/components/Socials";

type Props = {};

export default function HomeNameAndSocials({}: Props) {
   return (
      <div className="flex flex-col xl:flex-row xl:gap-4 items-center">
         <MyName />
         <Socials tooltipPosition="top" />
      </div>
   );
}

import ListText from "../ListText";
import ListUnderline from "../ListUnderline";

type Props = {};

export default function ListHeader({}: Props) {
   return (
      <div className="h-8 w-full flex items-start px-32 relative text-xs text-text">
         <ListText text="[PROJECT_NAME]" flex={3} />
         <ListText text="[SYSTEM_ROLE]" />
         <ListText text="[CORE_STACK]" />
         <ListUnderline initial />
      </div>
   );
}

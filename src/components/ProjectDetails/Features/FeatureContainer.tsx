type Props = {
   children: React.ReactNode;
   reverse: boolean;
};

export default function FeatureContainer({ children, reverse }: Props) {
   return (
      <div
         className={` md:flex rounded-xl shadow-lg overflow-hidden w-full border-[8px] border-white ${
            reverse ? "flex-row-reverse" : ""
         }`}
      >
         {children}
      </div>
   );
}

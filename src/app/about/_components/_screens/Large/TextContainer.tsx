type Props = {
   children: React.ReactNode;
};

export default function TextContainer({ children }: Props) {
   return (
      <div className="h-full flex-2 overflow-hidden">
         <div className="w-full h-full overflow-hidden flex items-center justify-center pl-32 pr-48 ">
            {children}
         </div>
      </div>
   );
}

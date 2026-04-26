type Props = {
   children: React.ReactNode;
};

export default function ProjectDescription({ children }: Props) {
   return (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl w-full sm:w-4/5 md:w-2/3 font-semibold">
         {children}
      </div>
   );
}

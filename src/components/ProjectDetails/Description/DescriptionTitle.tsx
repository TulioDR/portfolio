type Props = {
   children: React.ReactNode;
};

export default function DescriptionTitle({ children }: Props) {
   return (
      <div className="text-gray-800 text-3xl font-semibold tracking-widest pr-10">
         {children}
      </div>
   );
}

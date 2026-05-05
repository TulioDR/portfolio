type Props = {
   icon: string;
};

export default function NavItemSlide({ icon }: Props) {
   return (
      <div className="h-full aspect-square shrink-0 flex items-center justify-center bg-primary">
         <span className="material-symbols-outlined text-text! text-7xl!">
            {icon}
         </span>
      </div>
   );
}

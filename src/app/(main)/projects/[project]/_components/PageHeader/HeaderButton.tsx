type Props = {
   onClick: () => void;
   icon: string;
   text: string;
};

export default function HeaderButton({ onClick, icon, text }: Props) {
   return (
      <button
         onClick={onClick}
         className="h-12 cursor-pointer px-4 flex gap-2 items-center justify-center border border-black rounded-full hover:bg-black active:bg-black hover:text-white active:text-white"
      >
         <span className="text-xs sm:text-sm">{text}</span>
         <span className="material-symbols-outlined text-xl!">{icon}</span>
      </button>
   );
}

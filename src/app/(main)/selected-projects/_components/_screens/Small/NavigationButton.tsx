type Props = {
   right?: true;
   onClick: () => void;
   disabled: boolean;
};

export default function NavigationButton({ right, onClick, disabled }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-full aspect-square rounded-full bg-white text-black flex items-center justify-center ${disabled ? "opacity-40 pointer-events-none" : "cursor-pointer"}`}
      >
         <span className="material-symbols-outlined">
            {right ? "arrow_forward_ios" : "arrow_back_ios_new"}
         </span>
      </button>
   );
}

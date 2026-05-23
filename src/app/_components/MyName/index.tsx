type Props = {};

export default function MyName({}: Props) {
   return (
      <span
         style={{
            textShadow:
               "-1px -1px 0 #e5e7eb, 1px -1px 0 #e5e7eb, -1px 1px 0 #e5e7eb, 1px 1px 0 #e5e7eb",
         }}
         className="text-[2.40rem] text-center font-black  text-black w-max"
      >
         {`Tulio Ruzo `}
      </span>
   );
}

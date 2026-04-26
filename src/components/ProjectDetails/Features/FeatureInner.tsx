type Props = {
   children?: React.ReactNode;
   info?: boolean;
};

export default function FeatureInner({ children, info }: Props) {
   return (
      <div
         className={`w-full md:w-1/2 aspect-square relative flex flex-col space-y-5 justify-center p-[7%] ${
            info ? "bg-white" : "bg-gray-800"
         }`}
      >
         {children}
      </div>
   );
}

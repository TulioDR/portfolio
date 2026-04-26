type Props = {
   children: React.ReactNode;
};

export default function Title({ children }: Props) {
   return (
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl sm:min-w-max tracking-wide">
         {children}
      </h1>
   );
}

import MouseIcon from ".";

type Props = {
   controls?: any;
};

export default function MobileMouseIcon({ controls }: Props) {
   // const { isMobile } = useDeviceSizeContext();
   const isMobile = false;

   if (!isMobile) return <></>;
   return (
      <div className="absolute bottom-4 left-0 w-full h-16 flex items-center justify-center">
         <MouseIcon controls={controls} />
      </div>
   );
}

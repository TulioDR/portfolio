"use client";

type Props = {
   children: React.ReactNode;
   modal: React.ReactNode;
};

export default function MainLayout({ children, modal }: Props) {
   return (
      <div>
         {children}
         {modal}
      </div>
   );
}

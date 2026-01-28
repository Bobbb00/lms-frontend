import LayoutMaintenance from "./LayoutMaintenance";
import Navbar from "@/components/common/Navbar";

type LayoutRootProps = {
  children: React.ReactNode;
  title: string;
  mode?: 'default' | 'maintenance';
};

export default function LayoutRoot({
  children,
  mode = 'default',
}: LayoutRootProps) {
  return (
    <main className={`font-sans `}>
     <Navbar />

     <section className="2xl:container mx-auto">
        {mode === 'maintenance' ? <LayoutMaintenance /> : children}
     </section>
    </main>
  );
}
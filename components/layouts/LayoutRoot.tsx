import LayoutMaintenance from "./LayoutMaintenance";

type LayoutRootProps = {
  children: React.ReactNode;
  title: string;
  mode?: 'default' | 'maintenance';
};

export default function LayoutRoot({
  children,
  title,
  mode = 'default',
}: LayoutRootProps) {
  return (
    <main className={`font-sans `}>
     {mode === 'maintenance' ? <LayoutMaintenance /> : children}
    </main>
  );
}
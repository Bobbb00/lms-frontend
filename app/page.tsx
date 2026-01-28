
import LayoutRoot from "@/components/layouts/LayoutRoot"
import Link from "next/link"
import Hero from "@/components/views/Hero"

export default function Home() {
  return (
  <LayoutRoot title="Beranda" mode="default" >
    <Hero />
  </LayoutRoot>

  );
}

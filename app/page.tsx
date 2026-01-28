
import LayoutRoot from "@/components/layouts/LayoutRoot"
import HeaderSection from "@/components/layouts/HeaderSection"
import {Banana, Menu} from "lucide-react"

export default function Home() {
  return (
  <LayoutRoot title="Home">
    <HeaderSection titleHeader="Default" />
    <Banana/>
    <Menu/>
  </LayoutRoot>

  );
}

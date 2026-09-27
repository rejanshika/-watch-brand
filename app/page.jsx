import Hero from "@/components/Hero";
import OverlapScroll from "@/components/OverlapScroll";
import Marquee from "@/components/Marquee";
import Motion from "@/components/Motion";
import Products from "@/components/Products";
import CraftFilm from "@/components/CraftFilm";
import Story from "@/components/Story";
import Specs from "@/components/Specs";
import Enquire from "@/components/Enquire";

export default function Home() {
  return (
    <main>
      <Hero />
      <OverlapScroll />
      <Marquee />
      <Motion />
      <Products />
      <CraftFilm />
      <Story />
      <Specs />
      <Enquire />
    </main>
  );
}
